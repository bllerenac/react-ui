import React from "react";
import "../stylesheets/search_bar.css";

const SearchBar = () => {
return (
  <div className="header__searchbar-container">
    <i className="ri-search-line"></i>
    <input placeholder="Buscar" />
  </div>
);
}

export default SearchBar;
