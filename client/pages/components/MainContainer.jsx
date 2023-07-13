import React from 'react';

//TODO: import child components
import CardContainer from './CardContainer.jsx';
import FilterContainer from './FilterContainer.jsx';

const MainContainer = ({ mountainInfo, userInfo }) => {
  return (
    <div id="mainContainer">
      <FilterContainer />
      <CardContainer mountainInfo={mountainInfo} userInfo={userInfo} />
    </div>
  );
};

export default MainContainer;
