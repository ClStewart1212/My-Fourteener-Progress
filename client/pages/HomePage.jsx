import React, { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import MainContainer from './components/MainContainer.jsx'
import { useQuery } from 'react-query'

const HomePage = () => {
  // const [mountainInfo, setMountainInfo] = useState([])
  // const [userInfo, setUserInfo] = useState([])
  const [milesHiked, setMilesHiked] = useState(0)
  const [elevation, setElevation] = useState(0)

  const mountainsQuery = useQuery({
    queryKey: ['mountains'],
    queryFn: () => fetch('/api/mountain').then(res => res.json()),
  })
  if (mountainsQuery.isSuccess)
    console.log('mountainsQuery: ', mountainsQuery.data)

  const userQuery = useQuery({
    queryKey: ['user'],
    // TODO: Change hardcoded user
    queryFn: () => fetch('/api/user').then(res => res.json()),
  })
  if (userQuery.isSuccess) console.log('userQuery: ', userQuery.data)

  /*
  !old async queries without react-query
  useEffect(() => {
    const getInfo = async () => {
      try {
        const mountainResponse = await fetch('/api/mountain')
        const newMountainInfo = await mountainResponse.json()
        setMountainInfo(newMountainInfo)
        fetch('/api/user')
          .then(response => response.json())
          .then(data => setUserInfo(data))
      } catch (error) {
        console.log(error)
      }
    }
    getInfo()
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
  */

  return (
    <div id="home">
      <Header
        userInfo={userQuery}
        milesHiked={milesHiked}
        elevation={elevation}
      />
      <MainContainer />
    </div>
  )
}

export default HomePage
