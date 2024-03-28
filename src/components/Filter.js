import React from "react";

function Filter({ category, onCategoryChange }) {
  return (
    <div className="Filter">
      <select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Meat">Meat</option>
        <option value="Frozen">Frozen</option>
      </select>
    </div>
  );
}

export default Filter;

