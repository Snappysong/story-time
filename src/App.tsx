import React, {useState} from 'react';
import './App.css';
import DeckDetail from './components/DeckDetail';
import StoryCard from './components/StoryCard';

import myDeck from './data'

const App = () => {
  const [playerHealth, setPlayerHealth] = useState(0)//number of starting health
  const [playerResource, setPlayerResource] = useState(0)
  const [storyCards, setStoryCards] = useState([])//array of story cards
  const [gameOver, setGameOver] = useState(false)//keep track if game is still going

  const handleStart = () => {}

  return (
    <div className="App">
      <h1>Story Time</h1>
      <button className="start" onClick={handleStart}>
        Start Adventure
      </button>
      <p className="health">Health:</p>
      <p className="resource">Resource:</p>

      <DeckDetail 
        deckID={1}
        image="image here"
        description="deck description"
      />
      <p>Loading story...</p>
      <StoryCard 
        story="story card"
        choice1="choice 1"
        choice2="choice 2"
        choice3="choice 3"
      />
      
    </div>
  );
}

export default App;
