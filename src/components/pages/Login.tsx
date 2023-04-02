import { useDispatch } from "react-redux";
import { LoginData } from "../../model/LoginData"
import { authAction } from "../../redux/authSlice";
import LoginForm from "../forms/LoginForm"

    
export const Login: React.FC = () =>{
    const dispatch = useDispatch();
    function submitFn(loginData: LoginData): void {        
        dispatch(authAction.login(loginData.email))
    }
    return <><LoginForm submitFn={submitFn}/></>   
}