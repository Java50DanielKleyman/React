import { type } from 'os';
import React, { ReactNode } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { Cell } from './components/Cell';
import { CellType } from './model/CellType';
import { gameActions } from './redux/gameSlice';
import { ResetButton } from './components/ResetButton';



function App() {
  const cells = useSelector<any, CellType[] | string>(state => state.gameRow.cells)
  const dispatch = useDispatch();
  function getRow(): ReactNode {
    if (typeof cells == "string") {
      return <p>Game is over</p>
    }
    return cells.map(cell => <Cell width={'5vw'} cell={cell}
      clickFn={function (id: number): void {
        dispatch(gameActions.move(id))
      }} />)
  }
  return <><div style={{ display: 'flex', marginTop: '5vh', 
  justifyContent: 'center'}}>
    {getRow()}
  </div>
    {(typeof cells == "string") && <div style={{ marginTop: '5vh', textAlign: 'center' }}>
      <ResetButton /></div>}</>



}

export default App;