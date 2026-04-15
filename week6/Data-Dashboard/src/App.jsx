import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import DetailView from "./DetailView";

function App() {
  const [data, setData] = useState([]);

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

  return (
    <Routes>
      <Route path="/" element={<Dashboard data={data} />} />
      <Route path="/book/:id" element={<DetailView data={data} />} />
    </Routes>
  );
}

export default App;