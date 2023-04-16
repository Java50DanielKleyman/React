import { LoginData } from "../model/LoginData";

export default interface AuthService {
    login(login: LoginData, isGoogleSignIn?: boolean): Promise<string>;
    logout(): Promise<void>;     
}