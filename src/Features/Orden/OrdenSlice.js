import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const OrdenSlice = createSlice({
    name: 'orden',
    initialState,
    reducers:{
        addOrden:(state,action) => {
            state.push(action.payload)
        },
        deleteOrden:(state,action) => {
            const OrdenFound = state.find(orden => orden.id === action.payload);
            if (OrdenFound) {
                state.splice(state.indexOf(OrdenFound), 1);
            }
        },
        UpdateOrden:(state,action) => {
            const {id,producto,cantidad,precio,total} = action.payload;
            const OrdenFound = state.find(orden => orden.id === id);
            if(OrdenFound){
                OrdenFound.producto = producto
                OrdenFound.cantidad = cantidad
                OrdenFound.precio = precio
                OrdenFound.total = total
            }
        }
    }
})

export const { addOrden,deleteOrden,UpdateOrden } = OrdenSlice.actions

export default OrdenSlice.reducer