import { type } from 'os';
import React, { ReactNode, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { Cell } from './components/Cell';
import { CellType } from './model/CellType';
import { gameActions } from './redux/gameSlice';
import { ResetButton } from './components/ResetButton';
import { StartButton } from './components/StartButton';
import { StopGame } from './components/StopGame';

function App() {
  const cells = useSelector<any, CellType[] | string>(state => state.gameRow.cells)
  const dispatch = useDispatch();
  const [isStart, setIsStart] = useState(false);
  const [isStop, setIsStop] = useState(false);
  function startGame(): boolean {
    setIsStart(true);
    setIsStop(true)
    return true;
  }
  function stopGame(): boolean {
    setIsStart(false);
    setIsStop(false)
    return false;
  }
  function getRow(): ReactNode {
    if (typeof cells == "string") {
      return <p>Game is over</p>
    }
    return cells.map(cell => <Cell width={'5vw'} cell={cell}
      clickFn={function (id: number): void {
        dispatch(gameActions.move(id))
      }} />)
  }
  return <>
    {!isStart && <div style={{ marginTop: '5vh', textAlign: 'center' }}>
      <StartButton onClick={startGame} />
    </div>}
    {isStart && <div style={{ display: 'flex', marginTop: '5vh', justifyContent: 'center' }}>
      {getRow()}
    </div>}
    {isStop && <div style={{ marginTop: '5vh', textAlign: 'center' }}>
      <ResetButton /></div>}
    {isStop && <div style={{ marginTop: '5vh', textAlign: 'center' }}>
      <StopGame onClick={stopGame} /></div>}
  </>



}

export default App;