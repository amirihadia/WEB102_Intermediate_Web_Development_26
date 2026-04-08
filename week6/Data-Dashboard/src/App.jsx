import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://openlibrary.org/search.json?q=fiction"
        );
        const json = await res.json();

        if (json.docs) {
          setData(json.docs.slice(0, 50));
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

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

  const withYear = data.filter(
    (b) => b.first_publish_year
  ).length;

  const avgYear =
    data.reduce(
      (sum, b) => sum + (b.first_publish_year || 0),
      0
    ) / total || 0;

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
          <div className="card" key={index}>
            {book.cover_i && (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt="cover"
              />
            )}
            <h3>{book.title}</h3>
            <p className="author">
              {book.author_name?.[0] || "Unknown Author"}
            </p>
            <p className="year">
              {book.first_publish_year || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;