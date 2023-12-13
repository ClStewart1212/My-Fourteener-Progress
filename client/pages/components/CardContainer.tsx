import Card from './Card.jsx'
import { cardInfo } from '../../hooks/hooks.js'

type CardContainerProps = {
  cardInfo: cardInfo[]
  userUpdate: number
  setUserUpdate: React.Dispatch<React.SetStateAction<number>>
}

const CardContainer = ({
  cardInfo,
  setUserUpdate,
  userUpdate,
}: CardContainerProps) => {
  const cards: JSX.Element[] = []
  cardInfo.forEach((info, i) => {
    cards.push(
      <Card
        key={`card${i}`}
        info={info}
        setUserUpdate={setUserUpdate}
        userUpdate={userUpdate}
      />,
    )
  })

  return <div id="cardContainer">{cards}</div>
}

export default CardContainer
