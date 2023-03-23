import React from "react";
type Props = {
    onClick: () => void;
}
export const ResetButton: React.FC<Props> = ({ onClick }) => {
    function handleClick(): void {
        onClick();
    }

    return <button onClick={handleClick}>Reset</button>
} 