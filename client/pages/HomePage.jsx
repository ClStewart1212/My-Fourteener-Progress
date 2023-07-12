import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header.jsx';
import MainContainer from './components/MainContainer.jsx';

const HomePage = () => {
  const [mountainInfo, setMountainInfo] = useState([]);
  useEffect(() => {
    const getMountainInfo = async () => {
      try {
        const response = await fetch('/api/mountain');
        const info = await response.json();
        setMountainInfo(info);
      } catch (error) {
        console.log(error);
      }
    };
    getMountainInfo();
  }, []);
  return (
    <div id="home">
      <header id="title">
        <h1>Solo Project</h1>
      </header>
      <Header />
      <MainContainer mountainInfo={mountainInfo} />
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
