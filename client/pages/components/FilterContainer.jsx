import React from 'react';

const FilterContainer = () => {
  return (
    <div id="filterContainer">
      <h3 className="filterTitle">Filter by Completed:</h3>
      <form id="completionFilter" className="filter">
        <div>
          <input type="radio" name="completion" id="all" value="All"></input>
          <label htmlFor="all">All</label>
        </div>
        <div>
          <input
            type="radio"
            name="completion"
            id="complete"
            value="Complete"
          ></input>
          <label htmlFor="complete">Completed</label>
        </div>
        <div>
          <input
            type="radio"
            name="completion"
            id="incomplete"
            value="Incomplete"
          ></input>
          <label htmlFor="incomplete">Incomplete</label>
        </div>
        {/* <li>
          <label htmlFor="goals">Goals</label>
          <input type="checkbox" id="goals" value="Goals"></input>
        </li> */}
      </form>
      <h3 className="filterTitle">Filter by Class:</h3>
      <ul id="classFilter" className="filter">
        <li>
          <label htmlFor="min">Min: </label>
          <input type="text" name="min" placeholder="0"></input>
          <label htmlFor="max">Max: </label>
          <input type="text" name="max" placeholder="4"></input>
        </li>
      </ul>
      <h3 className="filterTitle">Filter by Distance:</h3>
      <ul id="distanceFilter" className="filter">
        <li>
          <label htmlFor="min">Min: </label>
          <input type="text" name="min" placeholder="0.2"></input>
          <label htmlFor="max">Max: </label>
          <input type="text" name="max" placeholder="24"></input>
        </li>
      </ul>
      <h3 className="filterTitle">Filter by Elevation Gain:</h3>
      <ul id="elevationFilter" className="filter">
        <li>
          <label htmlFor="min">Min: </label>
          <input type="text" name="min" placeholder="250"></input>
          <label htmlFor="max">Max: </label>
          <input type="text" name="max" placeholder="7,600"></input>
        </li>
      </ul>
    </div>
  );
};

export default FilterContainer;
