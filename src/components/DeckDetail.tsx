import React from 'react';
import { useNavigate } from 'react-router-dom';

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

    let navigate = useNavigate();
    const handleStart = () => {
        navigate(`/play/${deckID}`)
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