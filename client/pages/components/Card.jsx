import React from 'react';
import jeep from '../../assets/fourWheelDrive.png';
import star from '../../assets/star.png';
import FourWheelDrive from './FourWheelDrive.jsx';

const Card = ({ info }) => {
  return (
    <div className="card">
      <div
        className="cardHead"
        style={{
          backgroundImage: `url(${info.url})`,
        }}
      >
        <div className="cardHeadLeft">
          <FourWheelDrive road={info.road} />
        </div>
        <div className="cardHeadCenter">
          <h3 className="peak">{info.peak}</h3>
          <h4 className="range">Range: {info.range}</h4>
        </div>
        <div className="cardHeadRight">
          {/* <img className="favorite" src={star} /> */}
        </div>
      </div>
      <ul className="details">
        <li className="class">Class: {info.class}</li>
        <li className="distance">Distance: {info.distance} mi.</li>
        <li className="elevation">Elevation Gain: {info.elevation_gain}'</li>
        <li className="link">
          <a href={info.link}>Click for 14ers.com page</a>
        </li>
      </ul>
      <button className="moreInfo">Complete me!</button>
    </div>
  );
};

export default Card;
