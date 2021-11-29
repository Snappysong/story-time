import React, {useState} from 'react';
import './App.css';
import DeckDetail from './components/DeckDetail';

import myDecks from './data'

const App = () => {
  const [decks, setDecks] = useState(myDecks)//array of story cards


  return (
    <div className="App">
      <h1>Story Time</h1>

      <h3>Create a Story</h3>
      <div>
        <button>Create New Story</button>
      </div>

      <hr />
      <h3>Read a Story</h3>
      <div>
        {decks && decks.map((deck) => (
          <div key={deck.deckID}>
            <DeckDetail
              deckID={deck.deckID}
              image={deck.image}
              imagealt={deck.imagealt}
              description={deck.description}
              playerHealth={deck.playerHealth}
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
