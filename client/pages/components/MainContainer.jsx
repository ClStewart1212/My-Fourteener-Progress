import React from 'react';

//TODO: import child components
import CardContainer from './CardContainer.jsx';
import FilterContainer from './FilterContainer.jsx';

const MainContainer = ({
  mountainInfo,
  userInfo,
  setUserUpdate,
  userUpdate,
}) => {
  return (
    <div id="mainContainer">
      <FilterContainer />
      <CardContainer
        mountainInfo={mountainInfo}
        userInfo={userInfo}
        setUserUpdate={setUserUpdate}
        userUpdate={userUpdate}
      />
    </div>
  );
};

export default MainContainer;
