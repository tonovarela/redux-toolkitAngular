import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const autenticacionSlice = createSlice({
    name:"autenticacion",
    initialState:{
        estaAutenticando:false,
        nombre:""
    },
    reducers:{
        increment(state,payload){
        }
        
    }
});

export const { increment } = autenticacionSlice.actions;
export default autenticacionSlice;