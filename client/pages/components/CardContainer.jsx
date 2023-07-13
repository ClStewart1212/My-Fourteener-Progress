import React from 'react';
import Card from './Card.jsx';
import CompletedCard from './CompletedCard.jsx';

const CardContainer = ({ mountainInfo, userInfo }) => {
  const cards = [];
  console.log('mountain', mountainInfo);
  console.log('user', userInfo);

  mountainInfo.forEach((el, i) => {
    let completed = false;
    let user;
    userInfo.every((element) => {
      if (element.peak == el.peak) {
        completed = true;
        user = element;
      }
      return completed;
    });
    if (completed === true) {
      const newCard = (
        <CompletedCard key={`card${i}`} mountainInfo={el} userInfo={user} />
      );
      cards.push(newCard);
    } else {
      const newCard = <Card key={`card${i}`} info={el} />;
      cards.push(newCard);
    }
  });

  return <div id="cardContainer">{cards}</div>;
};

export default CardContainer;
