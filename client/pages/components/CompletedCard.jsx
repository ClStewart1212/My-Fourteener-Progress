import React from 'react';
import jeep from '../../assets/fourWheelDrive.png';
import checkmark from '../../assets/checkmark.png';

const CompletedCard = ({ mountainInfo, userInfo }) => {
  return (
    <div className="card">
      <div
        className="cardHead"
        style={{
          backgroundImage: `url(
            'https://www.14ers.com/routes/blan1/rt_blan1.jpg?lastupd=202210220600'
          )`,
        }}
      >
        <div className="cardHeadLeft">
          <img className="fourWheelDrive" src={jeep} />
        </div>
        <div className="cardHeadCenter">
          <h3 className="peak">{mountainInfo.peak}</h3>
          <h4 className="range">{mountainInfo.range}</h4>
        </div>
        <div className="cardHeadRight">
          <img className="favorite" src={checkmark} />
        </div>
      </div>
      <ul className="details">
        <li className="class">Class: {mountainInfo.class}</li>
        <li className="distance">Distance: {mountainInfo.distance} mi.</li>
        <li className="elevation">
          Elevation Gain: {mountainInfo.elevation_gain}'
        </li>
        <li className="link">
          <a href={mountainInfo.link}>Click for 14ers.com page</a>
        </li>
        <li className="completionDate">
          Completed on: {userInfo.completionDate}
        </li>
        <li className="completionDate">
          Completion Time: {userInfo.completionTime}
        </li>
      </ul>
      <button className="moreInfo">See More Info</button>
    </div>
  );
};

export default CompletedCard;
