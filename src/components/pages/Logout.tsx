import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

import { useDispatch } from "react-redux";
import { authService, AUTH_USER_ITEM } from "../../config/auth-service-config";
import { authAction } from "../../redux/authSlice";

export const Logout: React.FC = () => {
    const dispatch = useDispatch();       
    async function logoutFn() {   
       await authService.logout(); 
       localStorage.setItem(AUTH_USER_ITEM, '');
       dispatch(authAction.logout())                 
    }
    return <Box>
    <Button onClick={logoutFn}>Logout</Button>    
</Box>
}