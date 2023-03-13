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
    const [startIndex, setIndex] = useState(timeZones.findIndex( elm=>
    JSON.stringify(elm).includes(newCityCountry)));
    const [message, setMessage] = useState<string>('')

    useEffect(() => {
        const interval = setInterval(tic, 2000);
        console.log("useEffect");
        return () => clearInterval(interval);
    }, [])

    if (startIndex < 0) {
        timeResult = time.toLocaleTimeString();
        //setMessage("Wrong city/country")
    } else {
        timeResult = time.toLocaleTimeString(undefined,
            { timeZone: timeZones[startIndex].name })
    }
    function tic() {
        setTime(new Date());
    }
    function submit(value: string) : string{
        let res: string = ''
        setCityCountry(value)
        setIndex(timeZones.findIndex( elm=>
            JSON.stringify(elm).includes(value)))          
            if(timeZones.findIndex( elm=>
                JSON.stringify(elm).includes(value)) < 0){
                res = "Wrong city or country"}
                    return res;
    }
    
    return <div>
        <Input submitFn={submit} placeHolder={"enter any text"} buttonName="enter"/>
       <h2 style={stylesH2}>Current Time in {newCityCountry}</h2>
        <p style={styles}>{timeResult}</p>
    </div>
}
