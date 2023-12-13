import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import MainContainer from './components/MainContainer.jsx'
import {
  getAllMountainData,
  getAllUserData,
  mountainData,
  userData,
} from '../hooks/hooks'

const HomePage = () => {
  const [mountainInfo, setMountainInfo] = useState<mountainData[]>([])
  const [userInfo, setUserInfo] = useState<userData[]>([])
  const [milesHiked, setMilesHiked] = useState(0)
  const [elevation, setElevation] = useState(0)
  const [userUpdate, setUserUpdate] = useState(1)

  useEffect(() => {
    const fetchMountainData = async () => {
      const newMountainData = await getAllMountainData()
      setMountainInfo(newMountainData)
    }
    fetchMountainData()
  }, [])

  useEffect(() => {
    const fetchUserData = async () => {
      const newUserData = await getAllUserData()
      setUserInfo(newUserData)
    }
    fetchUserData()
  }, [userUpdate])

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

  // console.log('userInfo', userInfo, 'mountainInfo', mountainInfo);

  return (
    <div id="home">
      <Header
        userInfo={userInfo}
        milesHiked={milesHiked}
        elevation={elevation}
      />
      <MainContainer
        mountainInfo={mountainInfo}
        userInfo={userInfo}
        setUserUpdate={setUserUpdate}
        userUpdate={userUpdate}
      />
    </div>
  )
}

export default HomePage
