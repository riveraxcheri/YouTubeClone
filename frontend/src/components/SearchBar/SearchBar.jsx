import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <form>
        <input
          onChange={(event) => setSearchTerm(event.target.value)}
          type="text"
          value={searchTerm}
          placeholder="Search"
        />
      </form>
    </div>
  );
};

export default SearchBar;
