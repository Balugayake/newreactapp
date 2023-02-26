import React, { useState } from "react";
import "./CustomFilter.scss";
const CustomFilter = ({ data, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isActive, setIsActive] = useState(null);
  const [gender, setGender] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleActive = (e) => {
    setIsActive(
      e.target.value === "true"
        ? true
        : e.target.value === "false"
        ? false
        : null
    );
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleFilter = () => {
    const filteredData = data.filter((item) => {
      if (
        searchTerm &&
        !item.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }
      if (isActive !== null && item.active !== isActive) {
        return false;
      }
      if (gender && item.gender.toLowerCase() !== gender.toLowerCase()) {
        return false;
      }
      return true;
    });
    onFilter(filteredData);
  };

  return (
    <div className="custom-filter">
      <label htmlFor="searchTerm">Search</label>
      <input
        type="text"
        id="searchTerm"
        value={searchTerm}
        onChange={handleSearch}
      />
      <label htmlFor="active">Active</label>
      <select id="active" value={isActive} onChange={handleActive}>
        <option value="">All</option>
        <option value={true}>Active</option>
        <option value={false}>Inactive</option>
      </select>
      <label htmlFor="gender">Gender</label>
      <select id="gender" value={gender} onChange={handleGender}>
        <option value="">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default CustomFilter;
