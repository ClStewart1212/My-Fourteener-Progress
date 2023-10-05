import React from 'react'
import Card from './Card.jsx'
import CompletedCard from './CompletedCard.jsx'
import { useQueryClient } from 'react-query'

const CardContainer = () => {
  const queryClient = useQueryClient()
  const cards = []

  const mountainsQuery = queryClient.getQueryData(['mountains'])
  const userQuery = queryClient.getQueryData(['user'])

  console.log('mountainsQuery from CardContainer: ', mountainsQuery)
  if (mountainsQuery) {
    mountainsQuery.forEach((el, i) => {
      let completed = false
      let user
      userQuery.forEach(element => {
        if (element.peak == el.peak) {
          completed = true
          user = element
        }
      })
      if (completed === true) {
        const newCard = (
          <CompletedCard key={`card${i}`} mountainInfo={el} userInfo={user} />
        )
        cards.push(newCard)
      } else {
        const newCard = <Card key={`card${i}`} info={el} />
        cards.push(newCard)
      }
    })
  }
  return <div id="cardContainer">{cards}</div>
}

export default CardContainer
