import React from "react";

const Filter = () => {
  return (
    <select
      className="form-select form-select"
      aria-label=".form-select-sm example"
    >
      <option defaultValue>Filter by</option>
      <option value="1">Highest to the Lowest Price</option>
      <option value="2">Lowest to the Highest</option>
    </select>
  );
};

export default Filter;
