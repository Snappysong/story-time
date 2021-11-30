import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import StoryCardDetail from '../components/StoryCardDetail';

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

const PlayDeck = () => {
    const [cards, setCards] = useState<any>([])
    let params = useParams();
    const currentDeck = myDecks.find((deck) => deck.deckID.toString() === params.deckID)
    if (currentDeck){
        const { storyCards } = currentDeck
        console.log(storyCards)
        if (cards.length === 0){
            setCards(storyCards)
        }
    }

  

    return (
        <div>
            play this deck {currentDeck?.description}
            <div>
                {cards && cards.map((card: StoryCard) => (
                    <div key={card.cardID}>
                        <StoryCardDetail 
                            cardID={card.cardID}
                            cardText={card.cardText}
                            healthChange={card.healthChange}
                            cardButtons={card.cardButtons}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlayDeck