import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cardInfo, postUserData } from '../../hooks/hooks'

type CardCompletionProps = {
  info: cardInfo
  setUserUpdate: React.Dispatch<React.SetStateAction<number>>
}

const CardCompletion = ({ info, setUserUpdate }: CardCompletionProps) => {
  const [completionDate, setCompletionDate] = useState('')
  const [completionTime, setCompletionTime] = useState('')

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault
    postUserData(info.peak, completionTime, completionDate)
    setUserUpdate(userUpdate => userUpdate + 1)
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
    <div className="completeMe" id={info.peak}>
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
      <button
        className="completeButton"
        type="submit"
        onClick={e => handleClick(e)}>
        Complete me!
      </button>
    </div>
  )
}

export default CardCompletion
