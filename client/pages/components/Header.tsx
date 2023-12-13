import { useEffect, useState } from 'react'
import Panoramic from '../../assets/HumboldtPANO.jpg'

import { mountainData, userData } from '../../hooks/hooks'

type headerProps = {
  mountainInfo: mountainData[]
  userInfo: userData[]
}

const Header = ({ mountainInfo, userInfo }: headerProps) => {
  const [milesHiked, setMilesHiked] = useState(0)
  const [elevation, setElevation] = useState(0)

  useEffect(() => {
    if (userInfo.length > 0 && mountainInfo.length > 0) {
      let newMiles = 0
      let newElevation = 0
      mountainInfo.forEach(mount => {
        userInfo.forEach(climb => {
          if (mount.peak === climb.peak) {
            newMiles += mount.distance
            newElevation += mount.elevation_gain
          }
        })
      })
      setMilesHiked(newMiles)
      setElevation(newElevation)
    }
  }, [userInfo, mountainInfo])

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
        <h2>Completed: {userInfo.length} / 58</h2>
      </div>
    </div>
  )
}

export default Header
