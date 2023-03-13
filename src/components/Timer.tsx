import React, { useState, useEffect, useRef } from "react";
import timeZones from "../time-zones";
import { Input } from '../components/Input';

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
    let timeResult: string
    const [newCityCountry, setCityCountry] = useState(cityCountry)
    const [startIndex, setIndex] = useState(timeZones.findIndex(elm =>
        JSON.stringify(elm).includes(newCityCountry)));
    const [message, setMessage] = useState<string>('')

    useEffect(() => {
        const interval = setInterval(tic, 2000);
        console.log("useEffect");
        return () => clearInterval(interval);
    }, [])

    if (startIndex < 0) {
        timeResult = time.toLocaleTimeString();        
    } else {
        timeResult = time.toLocaleTimeString(undefined,
            { timeZone: timeZones[startIndex].name })
    }
    function tic() {
        setTime(new Date());
    }
    function submit(value: string): string {
        let res: string = ''
        let index: number = timeZones.findIndex(elm =>
            JSON.stringify(elm).includes(value));
        if (index < 0 || value.length == 0) {
            res = "Wrong city or country, please try again or check first letter - it must be capital"
        } else {
            setCityCountry(value)
            setIndex(index)
        }
        return res;
    }

    return <div>
        <Input submitFn={submit} placeHolder={"enter any text"} buttonName="enter" />
        <h2 style={stylesH2}>Current Time in {newCityCountry}</h2>
        <p style={styles}>{timeResult}</p>
    </div>
}
