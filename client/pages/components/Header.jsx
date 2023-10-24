import React from 'react'
import Panoramic from '../../assets/HumboldtPANO.jpg'
import { useQuery } from 'react-query'

const Header = ({ milesHiked, elevation }) => {
  const { data: userInfo } = useQuery({
    queryKey: ['user'],
    // TODO: Change hardcoded user
    queryFn: () => fetch('/api/user').then(res => res.json()),
  })
  console.log('userInfo from Header: ', userInfo)

  return (
    <div
      id="headerContainer"
      style={{
        backgroundImage: `url(${Panoramic})`,
      }}>
      <div id="leftHeader">
        <h2>Total Miles Hiked: {milesHiked.toLocaleString()} mi.</h2>
        <h2>Total Elevation Gained: {elevation.toLocaleString()}'</h2>
      </div>
      <div id="centerHeader">
        <h1 id="title">The Fourteeners of Colorado</h1>
      </div>
      <div id="rightHeader">
        {userInfo ? (
          <h2>Completed: {userInfo.length} / 58</h2>
        ) : (
          <h2>Loading... / 58</h2>
        )}
      </div>
    </div>
  )
}

export default Header
