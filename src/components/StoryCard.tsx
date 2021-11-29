import React from "react";

interface Button {
    title: string;
    pointer: number;
}
type Props = {
    cardID: number;
    cardText: string;
    healthChange: number;
    cardButtons: Button[];
}

const StoryCard: React.FC<Props> = ({
    cardID,
    cardText,
    healthChange,
    cardButtons,
}) => {

    const handleClick = (e: Button) => {
        console.log(e.pointer)
    }

    return (
        <div>
            Story Text {cardText}

            {cardButtons.map((button) => (
                <ul key={cardID}>
                    {/* <li><button onClick={handleClick}> {button.title} </button></li>  */}
                </ul>
            ))}

        </div>
    )
}

export default StoryCard