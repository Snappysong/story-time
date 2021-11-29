import React from "react";

type Props = {
    story: string;
    choice1: string;
    choice2: string;
    choice3: string;
}

const StoryCard: React.FC<Props> = ({
    story,
    choice1,
    choice2,
    choice3,
}) => {
    return (
        <div>
            Story Text {story}
            <button className="choice1">
                Choice 1 {choice1}
            </button>
            <button className="choice2">
                Choice 2 {choice2}
            </button>
            <button className="choice3">
                Choice 3 {choice3}
            </button>

        </div>
    )
}

export default StoryCard