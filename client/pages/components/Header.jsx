import React from 'react';
import Panoramic from '../../assets/HumboldtPANO.jpg';

const Header = ({ userInfo, milesHiked, elevation }) => {
  return (
    <div
      id="headerContainer"
      style={{
        backgroundImage: `url(${Panoramic})`,
      }}
    >
      <div id="leftHeader">
        <h2>Total Miles Hiked: {milesHiked.toLocaleString()} mi.</h2>
        <h2>Total Elevation Gained: {elevation.toLocaleString()}'</h2>
      </div>
      <div id="centerHeader">
        <h1 id="title">The Fourteeners of Colorado</h1>
      </div>
      <div id="rightHeader">
        <h2>Completed: {userInfo.length} / 58</h2>
      </div>
    </div>
  );
};

export default Header;
