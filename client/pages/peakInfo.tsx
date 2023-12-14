import React from 'react';
import truffle from '../assets/truffleHumboldt.jpg';

const MountainPage = () => {
  return (
    <div>
      <div
        className="peakInfo"
        style={{
          backgroundImage: `url(${truffle})`,
        }}
      >
        <h1>Welcome to the Peak Info page!</h1>
        <h2>and the wonderful world of Stretch Features!</h2>
      </div>
      <div id="spacer"></div>
      <h1 id="yield">I yield my time</h1>
    </div>
  );
};

export default MountainPage;
