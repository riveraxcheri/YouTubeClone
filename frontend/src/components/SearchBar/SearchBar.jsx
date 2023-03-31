import React from "react";

const SearchBar = ({setSearchTerm}) => {

  return (
    <div>
      <input 
      onChange={(event)=>setSearchTerm(event.target.value)} 
      type= "text"
      placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
