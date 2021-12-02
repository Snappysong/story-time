import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import DeckDetail from '../components/DeckDetail';

import myDecks from '../data';


interface Button {
    title: string;
    pointer: number;
}

interface StoryCard {
    cardID: number;
    cardText: string;
    healthChange: number;
    cardButtons: Button[];
}

interface Deck {
    deckID: number;
    image: string;
    imagealt: string;
    description: string;
    playerHealth: number;
    storyCards: StoryCard[]
}


const Dashboard = () => {

  //in real app use api to set myDecks from server
    const [decks, setDecks] = useState(myDecks)//array of story cards


    return (
      <div className="App">
        <h1>Create</h1>
        <div>
          <Link to="new">Create New Story</Link>
        </div>
  
        <hr />
        <h1>Play</h1>

        <div>
          {decks && decks.map((deck: Deck) => (
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

export default Dashboard
