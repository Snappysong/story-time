import React from "react";

interface Button {
    title: string;
    pointer: number;
}
type Props = {
    cardID: number;
    cardText: string;
    healthChange: number;
    equipmentChange: any;
    cardButtons: Button[];
    handleChange: any;
}

const StoryCardDetail: React.FC<Props> = ({
    cardID,
    cardText,
    healthChange,
    equipmentChange,
    cardButtons,
    handleChange,
}) => {

    return (
        <div>
            Card ID: {cardID}
            <br />
            Story Text {cardText}
            <br />
            HEALTH CHANGE: {healthChange}
            <br />
            <div className="button-container">
                {cardButtons.map((button) => (
                    <div 
                    onClick={() => handleChange(button.pointer, healthChange, equipmentChange)} 
                    key={button.pointer}
                    >
                        {button.title} go to {button.pointer}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StoryCardDetail