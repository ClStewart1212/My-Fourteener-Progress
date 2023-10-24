import React from 'react'
import Card from './Card.jsx'
import CompletedCard from './CompletedCard.jsx'
import { useQuery } from 'react-query'

const CardContainer = () => {
  const cards = []

  const mountainsQuery = useQuery({
    queryKey: ['mountains'],
    queryFn: () => fetch('/api/mountain').then(res => res.json()),
  })

  const userQuery = useQuery({
    queryKey: ['user'],
    // TODO: Change hardcoded user
    queryFn: () => fetch('/api/user').then(res => res.json()),
  })

  console.log('mountainsQuery from CardContainer: ', mountainsQuery)
  console.log('userQuery from CardContainer: ', userQuery)

  mountainsQuery.data?.forEach((el, i) => {
    let completed = false
    let user
    userQuery.data?.forEach(element => {
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
  return mountainsQuery.isLoading ? (
    <div id="cardContainer">Is loading....</div>
  ) : (
    <div id="cardContainer">{cards}</div>
  )
}

export default CardContainer
