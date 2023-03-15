import {configureStore} from "@reduxjs/toolkit";
import { counterActions, counterReducer } from "./counterSlice";
export const store: any = configureStore({
    reducer: {
        count: counterReducer,

    }
})
