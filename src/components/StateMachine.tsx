import React from "react";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { CounterUpdater } from "./CounterUpdater";
import { CounterMultiply } from "./CounterMultiply";
import { CounterSquare } from "./CounterSquare";
import { useSelector } from "react-redux";

export const StateMachine: React.FC = () => {   
    const authUser = useSelector<any, string>(state=>state.auth.authUser)
    
   return <>
    {!authUser && <Login/>}
    {authUser.length>0 && !authUser.includes('admin') && 
    (<><CounterUpdater operand={2}/><CounterSquare/><Logout/></>)}
    {authUser.length>0 && authUser.includes('admin') && 
    (<><CounterUpdater operand={2}/><CounterMultiply factor={2}/><CounterSquare/><Logout/></>)}
     </>
    
    
}