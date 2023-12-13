import React from 'react'

//TODO: import child components
import CardContainer from './CardContainer'
import FilterContainer from './FilterContainer.jsx'

const MainContainer = ({ cardInfo, setUserUpdate, userUpdate }) => {
  return (
    <div id="mainContainer">
      <FilterContainer />
      <CardContainer
        cardInfo={cardInfo}
        setUserUpdate={setUserUpdate}
        userUpdate={userUpdate}
      />
    </div>
  )
}

export default MainContainer
