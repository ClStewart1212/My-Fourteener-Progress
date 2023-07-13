import React from 'react';

const Header = ({ userInfo, milesHiked, elevation }) => {
  return (
    <div id="headerContainer">
      <div id="leftHeader">
        <p>Total Miles Hiked: {milesHiked} mi.</p>
        <p>Total Elevation Gained: {elevation}'</p>
      </div>
      <div id="rightHeader">
        <p>Completed: {userInfo.length}</p>
        <p>Incomplete:{58 - userInfo.length}</p>
      </div>
    </div>
  );
};

export default Header;
