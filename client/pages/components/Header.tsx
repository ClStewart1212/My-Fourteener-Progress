import { useEffect, useState } from 'react'
import Panoramic from '../../assets/HumboldtPANO.jpg'

import { cardInfo } from '../../hooks/hooks'

type headerProps = {
  cardInfo: cardInfo[]
}

const Header = ({ cardInfo }: headerProps) => {
  const [milesHiked, setMilesHiked] = useState(0)
  const [elevation, setElevation] = useState(0)
  const [completedTotal, setCompletedTotal] = useState(0)

  useEffect(() => {
    if (cardInfo.length > 0) {
      let newMiles = 0
      let newElevation = 0
      const completedCardInfo = cardInfo.filter(info => info.completed)
      setCompletedTotal(completedCardInfo.length)
      completedCardInfo.forEach(info => {
        newMiles += info.distance
        newElevation += info.elevationGain
      })
      setMilesHiked(newMiles)
      setElevation(newElevation)
    }
  }, [cardInfo])

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
        <h2>Completed: {completedTotal} / 58</h2>
      </div>
    </div>
  )
}

export default Header
