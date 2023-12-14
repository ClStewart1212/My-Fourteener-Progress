import { cardInfo } from '../../hooks/hooks'

type CardDetailsProps = {
  info: cardInfo
}

const CardDetails = ({ info }: CardDetailsProps) => {
  return (
    <ul className="details">
      <li className="class">Class: {info.class}</li>
      <li className="distance">Distance: {info.distance} mi.</li>
      <li className="elevation">
        Elevation Gain: {info.elevationGain.toLocaleString()}'
      </li>
      <li className="link">
        <a href={info.link}>Click for 14ers.com page</a>
      </li>
    </ul>
  )
}

export default CardDetails
