import React from 'react'
import { cardInfo } from '../../hooks/hooks'
import CardHeader from './CardHeader'
import CardDetails from './CardDetails'
import CardCompletion from './CardCompletion'

type CardProps = {
  info: cardInfo
  setUserUpdate: React.Dispatch<React.SetStateAction<number>>
}

const Card = ({ info, setUserUpdate }: CardProps) => {
  return (
    <div className={info.completed ? 'completedCard' : 'card'}>
      <CardHeader info={info} />
      <CardDetails info={info} />
      <CardCompletion info={info} setUserUpdate={setUserUpdate} />
    </div>
  )
}

export default Card
