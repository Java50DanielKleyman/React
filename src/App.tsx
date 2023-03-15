import React from 'react';

import './App.css';
import { CounterMultiply } from './components/CounterMultiply';
import { CounterSquare } from './components/CounterSquare';
import { CounterUpdater } from './components/CounterUpdater';
import { Timer } from './components/Timer';
import {Login} from './components/Login';
import {Logout} from './components/Logout';
import {StateMachine} from './components/StateMachine';

function App() {
  
  return <div style={{display: 'flex', alignItems: 'center',
   flexDirection: 'column'}}>

    {/* <Login/>
    <CounterUpdater operand={2}/>
    <CounterMultiply factor={3}/>
    <CounterSquare/>
    <Logout/> */}
    <StateMachine/>
  </div>
}

export default App;