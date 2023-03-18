import {configureStore} from "@reduxjs/toolkit";
import { game } from "../config/game-service-config";
import { gameReducer } from "./gameSlice";


export const store: any = configureStore({
    reducer: {
        gameRow: gameReducer
    }
})
