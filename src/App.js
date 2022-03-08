import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";

import CardGame from "./CardGame"

function App() {
  const [deckId, setDeckId] = useState(null);

  useEffect(function fetchDeckIdWhenMounted() {
    async function fetchDeck() {
      const result = await axios.get(
        "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
      setDeckId(result.data.deck_id);
    }
  }, []);

  if (!deckId) {

  }
  return (
    <div className="App">
      <CardGame />
    </div>
  );
}

export default App;
