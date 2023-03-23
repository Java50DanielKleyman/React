import React from "react";
type Props = {
    onClick: () => void;
}
export const StopButton: React.FC<Props> = ({ onClick }) => {
    function handleClick(): void {
        onClick();
    }

    return <button onClick={handleClick}>Stop the game</button>
} 