import React from "react";

const Category = ({ filterItems }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        breakfast
      </button>
    </div>
  );
};

export default Category;
