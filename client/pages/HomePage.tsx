import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import MainContainer from './components/MainContainer.jsx'

const HomePage = () => {
  const [mountainInfo, setMountainInfo] = useState([])
  const [userInfo, setUserInfo] = useState([])
  const [milesHiked, setMilesHiked] = useState(0)
  const [elevation, setElevation] = useState(0)
  const [userUpdate, setUserUpdate] = useState(1)

  useEffect(() => {
    const getInfo = async () => {
      try {
        const mountainResponse = await fetch('/api/mountain')
        const newMountainInfo = await mountainResponse.json()
        setMountainInfo(newMountainInfo)
        // const userResponse = await fetch('/api/user');
        // const newUserInfo = await userResponse.json();
        // setUserInfo(newUserInfo);

        fetch('/api/user')
          .then(response => response.json())
          .then(data => setUserInfo(data))

        // console.log('userInfo', userInfo, 'mountainInfo', mountainInfo);
      } catch (error) {
        console.log(error)
      }
    }
    getInfo()
    // console.log('useEffect userInfo', userInfo);
    // console.log('useEffect mountainInfo', mountainInfo);
    // setMilesHiked(0);
    // setElevation(0);
    // mountainInfo.forEach((mount) => {
    //   userInfo.forEach((climb) => {
    //     console.log('mount', mount);
    //     console.log('climb', climb);
    //     if (mount.peak === climb.peak) {
    //       setMilesHiked(milesHiked + mount.distance);
    //       setElevation(elevation + mount.elevation_gain);
    //     }
    //   });
    // });
  }, [userUpdate])

  useEffect(() => {
    // console.log('userInfo', userInfo, 'mountainInfo', mountainInfo);
    if (userInfo.length > 0 && mountainInfo.length > 0) {
      let newMiles = 0
      let newElevation = 0
      mountainInfo.forEach(mount => {
        let completed = false
        userInfo.forEach(climb => {
          // console.log('mount', mount);
          // console.log('climb', climb);
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

const getMountainInfo = async () => {
  try {
    const response = await fetch('/api/mountain')
    const info = await response.json()
    setMountainInfo(info)
  } catch (error) {
    console.log(error)
  }
}
