import React from 'react';

type Props = {
    deckID: number;
    image: string;
    imagealt: string;
    description: string
    playerHealth: number
}

const DeckDetail: React.FC<Props> = ({
    deckID,
    image,
    imagealt,
    description,
    playerHealth,
}) => {

    const handleStart = () => {
        console.log(image)
    }

    return (
        <div>
            <div>
                <img width='300px' src={image} alt={imagealt} />
            </div>
            <p>deck ID: {deckID}</p>
            <p>deck description: {description}</p>
            <p>starting health: {playerHealth} hit points</p>

            <button onClick={handleStart}>Start Adventure!</button>
        </div>
    )
}

export default DeckDetail