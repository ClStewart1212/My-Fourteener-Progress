import React from 'react';

//TODO: import child components
import CardContainer from './CardContainer.jsx';
import FilterContainer from './FilterContainer.jsx';

const MainContainer = ({ mountainInfo }) => {
  return (
    <div id="mainContainer">
      <FilterContainer />
      <CardContainer mountainInfo={mountainInfo} />
    </div>
  );
};

export default MainContainer;
