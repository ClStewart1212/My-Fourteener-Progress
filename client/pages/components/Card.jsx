import React from 'react';
import jeep from '../../assets/fourWheelDrive.png';
import star from '../../assets/star.png';

const Card = ({ info }) => {
  return (
    <div className="card">
      <div className="cardHead">
        <div className="cardHeadLeft">
          <img className="fourWheelDrive" src={jeep} />
        </div>
        <div className="cardHeadCenter">
          <h3 className="peak">{info.peak}</h3>
          <h4 className="range">{info.range}</h4>
        </div>
        <div className="cardHeadRight">
          <img className="favorite" src={star} />
        </div>
      </div>
      <div
        className="mountainImg"
        style={{
          backgroundImage: `url(
            'https://www.14ers.com/routes/blan1/rt_blan1.jpg?lastupd=202210220600'
          )`,
        }}
      ></div>
      <ul className="details">
        <li className="class">Class: {info.class}</li>
        <li className="distance">Distance: {info.distance} mi.</li>
        <li className="elevation">Elevation Gain: {info.elevation_gain}'</li>
        <li className="link">{info.link}</li>
      </ul>
      <button className="moreInfo">Get More Info</button>
    </div>
  );
};

export default Card;
