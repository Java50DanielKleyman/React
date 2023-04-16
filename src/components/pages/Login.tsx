import { useDispatch } from "react-redux";
import { authService, AUTH_USER_ITEM } from "../../config/auth-service-config";
import { LoginData } from "../../model/LoginData"
import { authAction } from "../../redux/authSlice";
import { codeActions } from "../../redux/codeSlice";
import LoginForm from "../forms/LoginForm"

export const Login: React.FC = () => {
    const dispatch = useDispatch();
    async function loginFn(loginData: LoginData) {
        try {
            const email: string = await authService.login(loginData);
            localStorage.setItem(AUTH_USER_ITEM, email);
            dispatch(authAction.login(email));
            dispatch(codeActions.set("OK"))
        } catch (error) {
            dispatch(codeActions.set("Wrong Credentials"))
        }
       
    }
    return <LoginForm submitFn={loginFn} />
}