import React from 'react';

const Header = () => {
  return (
    <div id="HeaderContainer">
      <div id="leftHeader">
        <p>Total Miles Hiked:</p>
        <p>Total Elevation Gained:</p>
      </div>
      <div id="rightHeader">
        <p>Completed:</p>
        <p>Incomplete:</p>
      </div>
    </div>
  );
};

export default Header;
