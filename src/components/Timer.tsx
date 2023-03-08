import React, { useState, useEffect } from "react";
import timeZones from "../time-zones";
type Props = {
    cityCountry: string;
}
export const Timer: React.FC<Props> = ({ cityCountry }) => {
    const styles: React.CSSProperties = {
        backgroundColor: "lightblue",
        fontSize: "2em",
        textAlign: "center",
        marginLeft: "2vw"
    };
    const stylesH2: React.CSSProperties = {
        marginLeft: "2vw"
    };

    const [time, setTime] = useState<Date>(new Date());
    let timeResult: string;
    let index: number = timeZones.findIndex(getIndex);

    useEffect(() => {
        const interval = setInterval(tic, 2000);
        console.log("useEffect");
        return () => clearInterval(interval);
    }, [])

    function getIndex(elm: object, ind: number) {
        const str = JSON.stringify(elm);
        if (str.includes(cityCountry)) {
            return ind
        }
    }
    if (index == -1) {
        timeResult = time.toLocaleTimeString();
    } else {
        timeResult = time.toLocaleTimeString(undefined,
            { timeZone: timeZones[index].name })
    }
    function tic() {
        setTime(new Date());
    }
    return <div>
        <h2 style={stylesH2}>Current Time in {cityCountry}</h2>
        <p style={styles}>{timeResult}</p>
    </div>
}