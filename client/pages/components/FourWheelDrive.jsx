import React from 'react';
import jeep from '../../assets/fourWheelDrive.png';

const FourWheelDrive = ({ road }) => {
  if (road <= 2) {
    return;
  } else {
    return <img className="fourWheelDrive" src={jeep} />;
  }
};

export default FourWheelDrive;
