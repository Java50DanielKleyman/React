import React, { useEffect, useRef, useState } from "react";
import { Alert } from "./Alert";
type Props = {
    submitFn: (value: string) => string;
    placeHolder: string;
    buttonName?: string;
}
export const Input: React.FC<Props> = ({ submitFn, placeHolder, buttonName }) => {
    const id = useRef<string>(Math.random().toString());
    const inputElement = useRef<HTMLInputElement | null>();
    const [message, setMessage] = useState<string>('')
    useEffect(() => {

        inputElement.current = document.getElementById(id.current) as HTMLInputElement
    }, []);
    function inputProcess() {
        let message1 = submitFn(inputElement.current!.value)
        
        if (message1) {
            setMessage(message1)
        } else {
            inputElement.current!.value = '';
            setMessage(message1)
        }
    }

    return <div>
        <input type="text" placeholder={placeHolder} id={id.current} />
        <button onClick={inputProcess}>{buttonName || "GO"}</button>
        {message && <Alert message={message} />}
    </div>

}