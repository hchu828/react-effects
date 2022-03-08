import { useState, useEffect } from "react";
import axios from "axios";

import Card from "./Card";

/**  Card game component for drawing cards from Deck API
 * 
 * Props:
 * - deckId: string used to access a specifc deck from API 
 * 
 * State: 
 * - card: Card object with { success, cards, deck_id, remaining}
 * - cardsLeft: number of cards remaining in deck from API
 * 
 * App -> CardGame -> Card
 */
function CardGame({ deckId }) {
  const [card, setCard] = useState(null);
  const [cardsLeft, setCardsLeft] = useState(52);

  //get Card object from API and update card state
  useEffect(function fetchCardWhenMounted() {
    async function fetchCard() {
      const result = await axios.get(
        `http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
      setCard(result.data.cards[0]);
    }
    fetchCard();
  }, [cardsLeft]);

  //decrement cardsLeft
  function drawCard() {
    setCardsLeft(() => cardsLeft - 1);
  }


  return (
    <div>
      <button onClick={drawCard}>Get card</button>
      {
        cardsLeft === 0 &&
        <p>Error: No cards remaining.</p>
      }
      {
        cardsLeft < 52 && cardsLeft !== 0 &&
        < Card
          cardImage={card.image}
          cardCode={card.code}
        />
      }
    </div>
  )
}

export default CardGame;