import React from "react";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { CounterUpdater } from "./CounterUpdater";
import { CounterMultiply } from "./CounterMultiply";
import { CounterSquare } from "./CounterSquare";
import { useSelector } from "react-redux";

export const StateMachine: React.FC = () => {
    let htmlText: string = '';
    const authUser = useSelector<any, string>(state=>state.auth.authUser)
    if(authUser!){
        htmlText='<Login/>'
    }

    return <Login/>
}