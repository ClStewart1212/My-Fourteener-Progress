import React from 'react';

const FilterContainer = () => {
  return (
    <div id="filterContainer">
      <p>Filter Categories</p>
      <p>Completed:</p>
      <ul>
        <li>
          <span>All</span>
          <input type="checkbox" id="all" value="All"></input>
          <span>Completed</span>
          <input type="checkbox" id="complete" value="Complete"></input>
          <span>Incomplete</span>
          <input type="checkbox" id="incomplete" value="Incomplete"></input>
          <span>Goals</span>
          <input type="checkbox" id="goals" value="Goals"></input>
        </li>
      </ul>
    </div>
  );
};

export default FilterContainer;
