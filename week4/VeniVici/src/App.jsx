import { useState } from "react";
import "./App.css"; // make sure this is imported

function App() {
  // 🔑 ADD YOUR API KEY HERE
  const API_KEY = "live_ed3r6SroZl5cpJtB5ISvDcl9bhzQJOKyTGL8DTikAXn6hKeo1Bet9tlVXV4BhhTC";

  const [currentItem, setCurrentItem] = useState(null);
  const [banList, setBanList] = useState([]);

  const fetchCat = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?has_breeds=1",
        {
          headers: {
            "x-api-key": API_KEY,
          },
        }
      );

      const data = await response.json();
      const item = data[0];

      const breed = item.breeds?.[0];

      const newItem = {
        image: item.url,
        name: breed?.name || "Unknown",
        origin: breed?.origin || "Unknown",
        temperament: breed?.temperament || "Unknown",
      };

      if (
        (newItem.name !== "Unknown" && banList.includes(newItem.name)) ||
        (newItem.origin !== "Unknown" && banList.includes(newItem.origin))
      ) {
        return;
      }

      setCurrentItem(newItem);
    } catch (error) {
      console.error("Error fetching cat:", error);
      alert("Something went wrong. Try again!");
    }
  };

  const toggleBan = (value) => {
    if (banList.includes(value)) {
      setBanList(banList.filter((item) => item !== value));
    } else {
      setBanList([...banList, value]);
    }
  };

  return (
    <div className="app">
      <h1>Discover Cats 🐱</h1>

      <button className="discover-btn" onClick={fetchCat}>
        Discover!
      </button>

      {currentItem && (
        <div className="card">
          <img src={currentItem.image} alt="cat" className="cat-img" />

          <h2
            className="clickable"
            onClick={() =>
              currentItem.name !== "Unknown" &&
              toggleBan(currentItem.name)
            }
          >
            Breed: {currentItem.name}
          </h2>

          <h3
            className="clickable"
            onClick={() =>
              currentItem.origin !== "Unknown" &&
              toggleBan(currentItem.origin)
            }
          >
            Origin: {currentItem.origin}
          </h3>

          <p>Temperament: {currentItem.temperament}</p>
        </div>
      )}

      <h2 className="ban-title">Ban List 🚫</h2>

      <div className="ban-container">
        {banList.length === 0 ? (
          <p>No banned attributes yet</p>
        ) : (
          banList.map((item, index) => (
            <span
              key={index}
              className="ban-item"
              onClick={() => toggleBan(item)}
            >
              {item} ❌
            </span>
          ))
        )}
      </div>
    </div>
  );
}

export default App;