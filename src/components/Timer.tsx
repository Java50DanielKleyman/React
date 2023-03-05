import React from "react"
export const Timer: React.FC = () => {
    const styles: React.CSSProperties = { backgroundColor: "lightblue", fontSize: "2em" }
    setTimeout(tic, 10000)
   const [time, setTime] = React.useState(new Date())
    function tic() {// тик - это обытие внутри
        if(styles.backgroundColor = "lightblue"){
            styles.backgroundColor = "red"
           } else styles.backgroundColor = "lightblue"
       setTime(new Date())      
    }

    return <div>
        <h2>Current Time</h2>
        <p style={styles}>{time.toLocaleTimeString()}</p>
    </div>
}