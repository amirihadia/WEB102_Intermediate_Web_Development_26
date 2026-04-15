import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    PieChart,
    Pie
} from "recharts";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import {Cell, Legend } from "recharts";

function Dashboard({ data }) {
    const [search, setSearch] = useState("");
    const [yearFilter, setYearFilter] = useState("");

    const filteredData = data.filter((book) => {
        const matchesSearch = book.title
        ?.toLowerCase()
        .includes(search.toLowerCase());

        const matchesYear = yearFilter
        ? (book.first_publish_year || 0) >= parseInt(yearFilter)
        : true;

        return matchesSearch && matchesYear;
    });

    // stats
    const total = data.length;
    const withYear = data.filter((b) => b.first_publish_year).length;
    const avgYear =
        data.reduce((sum, b) => sum + (b.first_publish_year || 0), 0) /
        total || 0;

    //charts
    const decadeCounts = {};

    data.forEach((book) => {
    if (book.first_publish_year) {
        const decade = Math.floor(book.first_publish_year / 10) * 10;
        decadeCounts[decade] = (decadeCounts[decade] || 0) + 1;
    }
    });

    const decadeData = Object.keys(decadeCounts).map((decade) => ({
    decade,
    count: decadeCounts[decade],
    }));

    const statsData = [
    { name: "With Year", value: withYear },
    { name: "No Year", value: total - withYear },
    ];

    return (
        <div className="app">
        <h1 className="title">📚 Book Dashboard</h1>

        {/* Stats */}
        <div className="stats">
            <div className="stat-card">
            <h3>{total}</h3>
            <p>Total Books</p>
            </div>
            <div className="stat-card">
            <h3>{withYear}</h3>
            <p>With Year</p>
            </div>
            <div className="stat-card">
            <h3>{Math.round(avgYear)}</h3>
            <p>Avg Year</p>
            </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "40px", margin: "30px 0" }}>

        {/* Bar Chart */}
        <BarChart width={400} height={300} data={decadeData}>
            <XAxis dataKey="decade" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" />
        </BarChart>

        {/* Pie Chart */}
<div style={{ textAlign: "center" }}>
    <h3>Book Data Breakdown</h3>

    <PieChart width={300} height={300}>
        <Pie
            data={statsData}
            dataKey="value"
            nameKey="name"
            label={({ name, percent }) =>
                `${name} (${(percent * 100).toFixed(0)}%)`
            }
        >
            {statsData.map((entry, index) => (
                <Cell
                    key={`cell-${index}`}
                    fill={["#8884d8", "#82ca9d"][index]}
                />
            ))}
        </Pie>

        <Legend />
    </PieChart>
</div>

        </div>

        {/* Controls */}
        <div className="controls">
            <input
            type="text"
            placeholder="Search books..."
            onChange={(e) => setSearch(e.target.value)}
            />

            <select onChange={(e) => setYearFilter(e.target.value)}>
            <option value="">All Years</option>
            <option value="2000">After 2000</option>
            <option value="1990">After 1990</option>
            <option value="1980">After 1980</option>
            </select>
        </div>

        {/* Cards */}
        <div className="grid">
            {filteredData.map((book, index) => (
            <Link to={`/book/${index}`} key={index}>
                <div className="card">
                {book.cover_i && (
                    <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    />
                )}
                <h3>{book.title}</h3>
                <p>{book.author_name?.[0]}</p>
                <p>{book.first_publish_year}</p>
                </div>
            </Link>
            ))}
        </div>
        </div>
    );
}
export default Dashboard;