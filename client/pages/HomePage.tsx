import { useState, useEffect } from 'react'
import Header from './components/Header'
import MainContainer from './components/MainContainer'

import {
  cardInfo,
  createCardInfo,
  getAllMountainData,
  getAllUserData,
  mountainData,
  userData,
} from '../hooks/hooks'

const HomePage = () => {
  const [mountainInfo, setMountainInfo] = useState<mountainData[]>([])
  const [userInfo, setUserInfo] = useState<userData[]>([])
  const [cardInfo, setCardInfo] = useState<cardInfo[]>([])
  const [userUpdate, setUserUpdate] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

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
    setCardInfo(createCardInfo(userInfo, mountainInfo))
    setIsLoading(false)
  }, [userInfo])

  return (
    <div id="home">
      <Header cardInfo={cardInfo} />
      <MainContainer
        cardInfo={cardInfo}
        setUserUpdate={setUserUpdate}
        userUpdate={userUpdate}
        isLoading={isLoading}
      />
    </div>
  )
}

export default HomePage
