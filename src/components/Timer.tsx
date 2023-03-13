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
    JSON.stringify(elm).includes(cityCountry)));
    useEffect(() => {
        const interval = setInterval(tic, 2000);
        console.log("useEffect");
        return () => clearInterval(interval);
    }, [])

    // function getIndex(elm: object, ind: number) {
    //     const str = JSON.stringify(elm);
    //     if (str.includes(cityCountry)) {
    //         return ind
    //     }
    // }
    if (startIndex == -1) {
        timeResult = time.toLocaleTimeString();
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
        return res;
    }
    return <div>
        <Input submitFn={submit} placeHolder={"enter any text"} buttonName="enter"/>
        <h2 style={stylesH2}>Current Time in {newCityCountry}</h2>
        <p style={styles}>{timeResult}</p>
    </div>
}


// export const Timer: React.FC<Props> = ({ cityCountry }) => {
//     const styles: React.CSSProperties = {
//         backgroundColor: "lightblue",
//         fontSize: "2em"
//     };

//     const [time, setTime] = useState<Date>(new Date());   
    
//     function tic() {
//         setTime(new Date());

//     }
//     // useEffect(
//     //     () => {
//     //         timeZone.current = getTimeZone();
//     //     }, [cityCountry]
//     // )

//     useEffect(() => {
//         const interval = setInterval(tic, 2000);
//         console.log("useEffect");
//         return () => clearInterval(interval);
//     }, [])
//     // function getTimeZone(): string | undefined {
//     //     const index = timeZones.findIndex(tz => JSON.stringify(tz).includes(cityCountry));
        
//     //     return index < 0 ? undefined : timeZones[index].name
//     // }
//     /////////////////////////////////////////////////
//     // const timeZone = useRef<string | undefined>();
//     const startIndex: number = timeZones.findIndex(tz => JSON.stringify(tz).includes(cityCountry));
//     const [timeZone, setTimeZone] = React.useState(timeZones[startIndex].name);


//     function submit(value: string): string {
//         let index = timeZones.findIndex(tz => JSON.stringify(tz).includes(value));
//         let res = '';
//         if (index === -1) {
//             res = `${value} wrong city or country`;
//         } else {
            
//             setTimeZone(timeZones[index].name);
//         }

//         return res;
//     }
//     return <div>
//         <Input submitFn={submit} placeHolder={"enter city/country"} buttonName="enter" />
//         <h2 >Current Time in {cityCountry}</h2>
//         <p style={styles}>{time.toLocaleTimeString(undefined,
//             { timeZone })}</p>
//     </div>
// }