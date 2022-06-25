import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState("USD");

  const handleFilterencySelect = (e) => {
    setSelectedFilter(e.target.value);
    if (e.target.value !== "Filter by") {
      if (e.target.value === "1") {
        dispatch({ type: "HIGHEST_PRICE" });
      } else {
        dispatch({ type: "LOWEST_PRICE" });
      }
    }
  };
  return (
    <select
      className="form-select form-select"
      aria-label=".form-select-sm example"
      onChange={handleFilterencySelect}
      value={selectedFilter}
    >
      <option defaultValue>Filter by</option>
      <option value="1">Highest to the Lowest Price</option>
      <option value="2">Lowest to the Highest</option>
    </select>
  );
};

export default Filter;
