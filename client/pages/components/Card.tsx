import React from 'react';
import jeep from '../../assets/fourWheelDrive.png';
import star from '../../assets/star.png';
import FourWheelDrive from './FourWheelDrive.jsx';

const Card = ({ info, setUserUpdate, userUpdate }) => {
  const postUserData = async (event) => {
    event.preventDefault();
    console.log(event);
    const completionDate = event.target[0].value;
    const completionTime = event.target[1].value;
    console.log(
      'name',
      info.peak,
      'Date',
      completionDate,
      'Time',
      completionTime
    );
    const response = await fetch(`./api/user/?name=${info.peak}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completionTime, completionDate }),
    });
    setUserUpdate(userUpdate + 1);
  };

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
        <li className="elevation">
          Elevation Gain: {info.elevation_gain.toLocaleString()}'
        </li>
        <li className="link">
          <a href={info.link}>Click for 14ers.com page</a>
        </li>
      </ul>
      <form className="completeMe" id={info.peak} onSubmit={postUserData}>
        <div className="completed">
          <label htmlFor="completionDate">Completed On: </label>
          <input
            type="text"
            className="completeForm"
            name="completionDate"
            placeholder="06/06/2006"
          ></input>
        </div>
        <div className="completed">
          <label htmlFor="completionTime">Completion Time: </label>
          <input
            type="text"
            className="completeForm"
            name="completionTime"
            placeholder="06:06:06"
          ></input>
        </div>
        <button className="completeButton" type="submit">
          Complete me!
        </button>
      </form>
    </div>
  );
};

export default Card;
