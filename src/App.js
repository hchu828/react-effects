import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";

import CardGame from "./CardGame"

/**  App for selecting deck id and running CardGame
 * 
 * props:
 * none
 * 
 * state:
 * -deckId: string used to access a specifc deck from API 
 * - playingGame: boolean for if user started CardGame
*/
function App() {
  const [deckId, setDeckId] = useState(null);
  const [playingGame, setPlayingGame] = useState(false);

  //get deckId from API and store in deckId state
  useEffect(function fetchDeckIdWhenMounted() {
    async function fetchDeck() {
      const result = await axios.get(
        "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
      setDeckId(result.data.deck_id);
    }
    fetchDeck();
  }, []);

  //update playingGame state
  function startGame() {
    setPlayingGame(true);
  }

  if (!deckId) {
    return <i>Loading...</i>;
  }



  return (
    <div className="App">
      {!playingGame
        ?
        <button onClick={startGame}>Start Game</button>
        :
        <CardGame deckId={deckId} />
      }
    </div>
  );
}

export default App;
