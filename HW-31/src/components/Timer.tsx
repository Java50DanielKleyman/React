import React from "react"
export const Timer:React.FC=()=>
{
   
    const styles: React.CSSProperties= {backgroundColor:"lightblue", fontSize:"2em", color: "red",
    textAlign:"center"}
    let stylesH2: React.CSSProperties= {fontSize:"2em",color: "red",textAlign:"center"}
    let stylesH2New: React.CSSProperties= {fontSize:"2em",color: "blue",textAlign:"center"}
    setTimeout(tic, 1000);
    const [time, setTime] = React.useState(new Date());
    function tic()
    {
       setTime(new Date())
    } 
    const intervalDuration = 10000;

    React.useEffect(() => {
      const interval = setInterval(() => {
        setChanger((styleColor) => styleColor === stylesH2 ? stylesH2New : stylesH2);
      }, intervalDuration);
      return () => clearInterval(interval);
    }, []);
      
    let [changer,setChanger] = React.useState(stylesH2);
  
    return <div>
    <h2 className="text" style ={changer}> Current time </h2>
    <p style={styles}>{time.toLocaleTimeString()}</p>
    </div>
    }