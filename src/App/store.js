import { configureStore } from "@reduxjs/toolkit";
import  OrdenReducer  from "../Features/Orden/OrdenSlice";

export const store = configureStore({
    reducer:{
        orden: OrdenReducer
    }
})
