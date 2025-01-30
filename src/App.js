import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Movies from "./movies";
import Search from "./search";
// import MovieDetails from "./details"; // ✅ تأكد من الاستيراد الصحيح

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const getData = () => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    getData();
  }, []);

  const search = (word) => {
    if (!word) {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().startsWith(word.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div className="App">
      <Search search={search} />
      <Movies movie={filteredData} />
    
    </div>
  );
}

export default App;