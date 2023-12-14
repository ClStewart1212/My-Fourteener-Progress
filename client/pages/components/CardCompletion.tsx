import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cardInfo } from '../../hooks/hooks'

type CardCompletionProps = {
  info: cardInfo
  userUpdate: number
  setUserUpdate: React.Dispatch<React.SetStateAction<number>>
}

const CardCompletion = ({
  info,
  userUpdate,
  setUserUpdate,
}: CardCompletionProps) => {
  const [completionDate, setCompletionDate] = useState('')
  const [completionTime, setCompletionTime] = useState('')
  const postUserData = async () => {
    await fetch(`./api/user/?name=${info.peak}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completionTime, completionDate }),
    })
    setUserUpdate(userUpdate + 1)
  }

  return info.completed ? (
    <div>
      <ul className="details">
        <li className="completionDate">Completed on: {info.completedOn}</li>
        <li className="completionTime">
          Completion Time: {info.completionTime}
        </li>
      </ul>
      <div className="linkInfo">
        <Link to="/peakInfo" className="moreInfo">
          See More Info
        </Link>
      </div>
    </div>
  ) : (
    <form
      className="completeMe"
      id={info.peak}
      onSubmit={e => {
        e.preventDefault
        postUserData()
      }}>
      <div className="completed">
        <label htmlFor="completionDate">Completed On: </label>
        <input
          type="text"
          className="completeForm"
          name="completionDate"
          placeholder="06/06/2006"
          onChange={e => setCompletionDate(e.target.value)}></input>
      </div>
      <div className="completed">
        <label htmlFor="completionTime">Completion Time: </label>
        <input
          type="text"
          className="completeForm"
          name="completionTime"
          placeholder="06:06:06"
          onChange={e => setCompletionTime(e.target.value)}></input>
      </div>
      <button className="completeButton" type="submit">
        Complete me!
      </button>
    </form>
  )
}

export default CardCompletion
