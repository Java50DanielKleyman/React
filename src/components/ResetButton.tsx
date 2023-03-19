import React from "react";
import { useDispatch } from "react-redux";
import { gameActions } from "../redux/gameSlice";

export const ResetButton: React.FC = () => {
    const dispatch = useDispatch();
    return <><button onClick={() => dispatch(gameActions.reset())}>Reset</button></>
}