import React from "react";
import { useDispatch } from "react-redux";
import { gameActions } from "../redux/gameSlice";
type Props = {
    onClick: () => boolean;
}

export const StopGame: React.FC<Props> = ({onClick}) => {
    const dispatch = useDispatch();
    function handleClick(): void {
        onClick();
        dispatch(gameActions.reset())
    }
    return <><button onClick={handleClick}>Stop the game</button></>
}