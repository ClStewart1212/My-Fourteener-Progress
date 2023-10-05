import React from 'react'

//TODO: import child components
import CardContainer from './CardContainer.jsx'
import FilterContainer from './FilterContainer.jsx'

const MainContainer = () => {
  return (
    <div id="mainContainer">
      <FilterContainer />
      <CardContainer />
    </div>
  )
}

export default MainContainer
