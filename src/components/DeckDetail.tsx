import React from 'react';

type Props = {
    deckID: number;
    image: any;
    description: string
}

const DeckDetail: React.FC<Props> = ({
    deckID,
    image,
    description,
}) => {
    return (
        <div>
            <div>
                deck image {image}
            </div>
            <p>deck ID: {deckID}</p>
            <p>deck description: {description}</p>
        </div>
    )
}

export default DeckDetail