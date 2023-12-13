import jeep from '../../assets/fourWheelDrive.png'
import checkmark from '../../assets/checkmark.png'
import star from '../../assets/star.png'
import { cardInfo } from '../../hooks/hooks'

type CardHeaderProps = {
  info: cardInfo
}

const CardHeader = ({ info }: CardHeaderProps) => {
  return (
    <div
      className="cardHead"
      style={{
        backgroundImage: `url(${info.imgUrl})`,
      }}>
      <div className="cardHeadLeft">
        {info.road ? <img className="fourWheelDrive" src={jeep} /> : null}
      </div>
      <div className="cardHeadCenter">
        <h3 className="peak">{info.peak}</h3>
        <h4 className="range">Range: {info.range}</h4>
      </div>
      <div className="cardHeadRight">
        {info.completed ? (
          <img className="favorite" src={checkmark} />
        ) : (
          <img className="favorite" src={star} />
        )}
      </div>
    </div>
  )
}

export default CardHeader
