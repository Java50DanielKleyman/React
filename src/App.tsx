import { useState } from "react";
import { Life } from "./components/Life";
import { StartButton } from "./components/StartButton"
import { StopButton } from "./components/StopButton"
import {ResetButton} from "./components/ResetButton"

function App() {
  const [isStart, setIsStart] = useState(false)
  const [isReset, setReset] = useState(false)
  function startGame(): void {
    setIsStart(true);    
  }
  function stopGame(): void {
    setIsStart(false);    
  }
  function resetGame():void {
       
  }
  return <>
    {!isStart && <div style={{
      display: "flex", justifyContent: "center", marginTop: "35vh",
      height: "50px", fontSize: "25px"
    }}><StartButton onClick={startGame} /></div>}
    {isStart && <div style={{
      display: "flex", justifyContent: "center", marginTop: "3vh"
    }}><StopButton onClick={stopGame} /></div>}    
    {isStart && <div style={{
      display: "flex", justifyContent: "center",
      alignItems: "center"
    }}><Life /></div>}
  </>
}

export default App;