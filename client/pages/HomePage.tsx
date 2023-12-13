import { useState, useEffect } from 'react'
import Header from './components/Header'
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
  const [userUpdate, setUserUpdate] = useState(1)

  useEffect(() => {
    const fetchMountainData = async () => {
      const newMountainData = await getAllMountainData()
      console.log('mountainData retrieved', newMountainData)
      setMountainInfo(newMountainData)
    }
    fetchMountainData()
  }, [])

  useEffect(() => {
    const fetchUserData = async () => {
      const newUserData = await getAllUserData()
      console.log('userData retrieved', newUserData)
      setUserInfo(newUserData)
    }
    fetchUserData()
  }, [userUpdate])

  return (
    <div id="home">
      <Header mountainInfo={mountainInfo} userInfo={userInfo} />
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
