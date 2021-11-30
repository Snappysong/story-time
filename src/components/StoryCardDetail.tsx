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

const StoryCardDetail: React.FC<Props> = ({
    cardID,
    cardText,
    healthChange,
    cardButtons,
}) => {

    return (
        <div>
            Card ID: {cardID}
            Story Text {cardText}
            starting health {healthChange}
            {cardButtons.map((button) => (
                <div>{button.title} and {button.pointer}</div>
            ))}
        </div>
    )
}

export default StoryCardDetail