import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

import { useDispatch } from "react-redux";
import { authAction } from "../../redux/authSlice";

export const Logout: React.FC = () => {
    const dispatch = useDispatch();       
    const submitFn = () => {        
        dispatch(authAction.logout())        
    }
    return <div>
    <Button onClick={submitFn}>Logout</Button>    
</div>
}