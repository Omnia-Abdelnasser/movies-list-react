import { useState } from "react";

const Search = ({ search }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const word = e.target.value;
    setSearchTerm(word);
    search(word);
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Enter the film..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
