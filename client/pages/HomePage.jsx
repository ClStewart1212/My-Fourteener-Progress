import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header.jsx';
import MainContainer from './components/MainContainer.jsx';

const HomePage = () => {
  const [mountainInfo, setMountainInfo] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [milesHiked, setMilesHiked] = useState(0);
  const [elevation, setElevation] = useState(0);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const mountainResponse = await fetch('/api/mountain');
        const newMountainInfo = await mountainResponse.json();
        setMountainInfo(newMountainInfo);
        const userResponse = await fetch('/api/user');
        const newUserInfo = await userResponse.json();
        setUserInfo(newUserInfo);
        setMilesHiked(0);
        setElevation(0);
        mountainInfo.forEach((mount) => {
          userInfo.forEach((climb) => {
            if (mount.peak === climb.peak) {
              setMilesHiked(milesHiked + mount.distance);
              setElevation(elevation + mount.elevation_gain);
            }
          });
        });
      } catch (error) {
        console.log(error);
      }
    };
    getInfo();
  }, []);

  return (
    <div id="home">
      <header id="title">
        <h1>Fourteeners Checklist</h1>
      </header>
      <Header
        userInfo={userInfo}
        milesHiked={milesHiked}
        elevation={elevation}
      />
      <MainContainer mountainInfo={mountainInfo} userInfo={userInfo} />
    </div>
  );
};

export default HomePage;

const getMountainInfo = async () => {
  try {
    const response = await fetch('/api/mountain');
    const info = await response.json();
    setMountainInfo(info);
  } catch (error) {
    console.log(error);
  }
};
