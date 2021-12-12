import { useEffect, useState } from 'react';
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
    equipmentChange: any;
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

interface Stats {
    playerHealth: number;
    equipment: any;
}

const PlayDeck = () => {
    const [cards, setCards] = useState<StoryCard[]>([])
    const [currentCard, setCurrentCard] = useState<number>(0)
    const [stats, setStats] = useState<Stats>({
        playerHealth: 0,
        equipment: [],
    })
    const [gameOver, setGameOver] = useState<boolean>(false)
    
    //finds what deck to play from params
    let params = useParams();
    const currentDeck = myDecks.find((deck: Deck) => deck.deckID === Number(params.deckID))

    //sets initial cards to found deck
    if (currentDeck){
        const { storyCards } = currentDeck
        if (cards.length === 0){
            setCards(storyCards)
            setCurrentCard(storyCards[0].cardID)
            setStats({
                playerHealth: currentDeck.playerHealth,
                equipment: [],
            })
        }
    }

    //checks if death has occurred and if so sends user to final card
    useEffect(() => {
        if(gameOver === true && currentDeck){
            let len = currentDeck.storyCards.length
            setCurrentCard(currentDeck.storyCards[len-1].cardID)
            console.log('death triggered')
        }
    },[gameOver])

    //function passed down as a prop to storyCardDetail to handle changes
    const handleChange = (pointer: number, healthChange: number, equipmentChange: string) => {
        console.log(stats.playerHealth)
        if (isPlayerAlive(stats)){
            setCurrentCard(pointer)
            console.log('next card')
            setStats({
                playerHealth: stats.playerHealth + healthChange,
                equipment: applyEquipmentChange(stats.equipment, equipmentChange)
            })
            console.log('stats set', stats.playerHealth)
        } else {
            setGameOver(true)
        }
    }
  
    if (currentCard !== 0){
        return (
            <div>
                play this deck {currentDeck?.description}
                <br />
                Current Health: {stats.playerHealth}
                <br />
                Equipment: {/*must add equipment*/}
                
                <div>
                    <StoryCardDetail 
                        cardID={cards[currentCard - 1/*because index of first card is 0*/].cardID}
                        cardText={cards[currentCard-1].cardText}
                        healthChange={cards[currentCard-1].healthChange}
                        equipmentChange={cards[currentCard-1].equipmentChange}
                        cardButtons={cards[currentCard-1].cardButtons}
                        handleChange={handleChange}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <div>
                Loading...
            </div>
        )
    }
}

const isPlayerAlive = (stats: Stats) => {
    if (stats.playerHealth <= 0){
        console.log('no health left')
        return false
    } else {
        console.log('still alive')
        return true
    }
}

const applyEquipmentChange = (equipmentArray: string[], equipmentChange: string) => {
    if (equipmentChange.includes('add')){
        equipmentArray.push(equipmentChange)
    } else if (equipmentChange.includes('remove')){
        //remove the correct equipment
    }
    return equipmentArray
}


export default PlayDeck