import { type } from 'os';
import React, { ReactNode, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { Cell } from './components/Cell';
import { CellType } from './model/CellType';
import { gameActions } from './redux/gameSlice';
import { ResetButton } from './components/ResetButton';
import { StartButton } from './components/StartButton';

function App() {
  const cells = useSelector<any, CellType[] | string>(state => state.gameRow.cells)
  const dispatch = useDispatch();
  const [isStart, setIsStart] = useState(false);

  function handlerFn(): boolean {
    setIsStart(true);
    return true;
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
      <StartButton onClick={handlerFn} />
    </div>}
    {isStart && <div style={{ display: 'flex', marginTop: '5vh', justifyContent: 'center' }}>
      {getRow()}
    </div>}
    {(typeof cells == "string") && <div style={{ marginTop: '5vh', textAlign: 'center' }}>
      <ResetButton /></div>}</>



}

export default App;