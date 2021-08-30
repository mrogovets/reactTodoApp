import React from "react";

import "./search-panel.css";

const SearchPanel = ({ searchHandler }) => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      onChange={(e) => searchHandler(e.target.value)}
    />
  );
};

export default SearchPanel;
