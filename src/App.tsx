import React from 'react';

import './App.css';
import { CounterMultiply } from './components/CounterMultiply';
import { CounterSquare } from './components/CounterSquare';
import { CounterUpdater } from './components/CounterUpdater';
import { Timer } from './components/Timer';

function App() {
  
  return <div style={{display: 'flex', alignItems: 'center',
   flexDirection: 'column'}}>
    <CounterUpdater operand={2}/>
    <CounterMultiply factor={3}/>
    <CounterSquare/>
  </div>
}

export default App;