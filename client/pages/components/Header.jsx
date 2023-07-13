import React from 'react';

const Header = ({ userInfo, milesHiked, elevation }) => {
  return (
    <div id="headerContainer">
      <div id="leftHeader">
        <p>Total Miles Hiked: {milesHiked.toLocaleString()} mi.</p>
        <p>Total Elevation Gained: {elevation.toLocaleString()}'</p>
      </div>
      <div id="centerHeader">
        <h1 id="title">Fourteeners Checklist</h1>
      </div>
      <div id="rightHeader">
        <p>Completed: {userInfo.length}</p>
        <p>Incomplete:{58 - userInfo.length}</p>
      </div>
    </div>
  );
};

export default Header;
