import React from "react";
type Props = {
    onClick: () => void;
}
export const StartButton: React.FC<Props> = ({ onClick }) => {
    function handleClick(): void {
        onClick();
    }

    return <button onClick={handleClick}>Start the game</button>
} 