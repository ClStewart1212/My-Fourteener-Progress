import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header.jsx';
import MainContainer from './components/MainContainer.jsx';

const HomePage = () => {
  const [mountainInfo, setMountainInfo] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    const getInfo = async () => {
      try {
        const mountainResponse = await fetch('/api/mountain');
        const newMountainInfo = await mountainResponse.json();
        setMountainInfo(newMountainInfo);
        const userResponse = await fetch('/api/user');
        const newUserInfo = await userResponse.json();
        setUserInfo(newUserInfo);
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
      <Header />
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
