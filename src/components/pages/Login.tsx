import { LoginData } from "../../model/LoginData"
import LoginForm from "../forms/LoginForm"

    
export const Login: React.FC = () =>{
    function submitFn(loginData: LoginData): void {
        let res: string = loginData.email;
        
    }
    return <><LoginForm submitFn={submitFn}/></>   
}