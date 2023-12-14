import Card from './Card'
import { cardInfo } from '../../hooks/hooks'

type CardContainerProps = {
  cardInfo: cardInfo[]
  setUserUpdate: React.Dispatch<React.SetStateAction<number>>
}

const CardContainer = ({ cardInfo, setUserUpdate }: CardContainerProps) => {
  const cards: JSX.Element[] = []
  cardInfo.forEach((info, i) => {
    cards.push(
      <Card key={`card${i}`} info={info} setUserUpdate={setUserUpdate} />,
    )
  })

  return <div id="cardContainer">{cards}</div>
}

export default CardContainer
