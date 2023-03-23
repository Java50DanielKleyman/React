import { useEffect, useState } from "react";
import { Life } from "./components/Life";
import { StartButton } from "./components/StartButton"
import { StopButton } from "./components/StopButton"
import {ResetButton} from "./components/ResetButton"

function App() {
  const [isStart, setIsStart] = useState(false)
  const [isReset, setReset] = useState(false)
  const [lifeKey, setLifeKey] = useState(0)
  function startGame(): void {
    setIsStart(true);    
  }
  function stopGame(): void {
    setIsStart(false);    
  }
  function resetGame():void {    
       setReset(true);
       setLifeKey(lifeKey + 1);
  }
  useEffect(() => {
    if (isReset) {
      setReset(false);
    }
  }, [isReset])
 
  return <>
    {!isStart && <div style={{
      display: "flex", justifyContent: "center", marginTop: "35vh",
      height: "50px", fontSize: "25px"
    }}><StartButton onClick={startGame} /></div>}
    {isStart && <div style={{
      display: "flex", justifyContent: "center", marginTop: "3vh"
    }}><StopButton onClick={stopGame} /></div>} 
       {isStart && <div style={{
      display: "flex", justifyContent: "center", marginTop: "3vh"
    }}><ResetButton onClick={resetGame} /></div>} 
    {isStart && <div style={{
      display: "flex", justifyContent: "center",
      alignItems: "center"
    }}><Life key={lifeKey}/></div>}
  </>
}

export default App;