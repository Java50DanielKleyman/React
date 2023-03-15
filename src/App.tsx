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
   flexDirection: 'column', marginTop: '15vh'}}>    
    <StateMachine/>
  </div>
}

export default App;