import { LoginData } from "../model/LoginData";

export default interface AuthService {
    login(login: LoginData, isGoogleSignIn?: boolean, isFacebookSignIn?: boolean): Promise<string>;
    logout(): Promise<void>;     
}