import React from 'react';
import Card from './Card.jsx';

const CardContainer = ({ mountainInfo }) => {
  console.log('CardContainer', mountainInfo);
  mountainInfo.forEach((el, i) => {
    const newCard = <Card class="card" cardId={`card${i}`} info={el} />;
  });

  return (
    <div id="cardContainer">
      <p>Card Container</p>
    </div>
  );
};

export default CardContainer;
