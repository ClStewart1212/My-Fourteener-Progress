import React from 'react';
import Card from './Card.jsx';

const CardContainer = ({ mountainInfo }) => {
  console.log('CardContainer', mountainInfo);
  const cards = [];
  mountainInfo.forEach((el, i) => {
    const newCard = <Card key={`card${i}`} info={el} />;
    cards.push(newCard);
  });

  return <div id="cardContainer">{cards}</div>;
};

export default CardContainer;
