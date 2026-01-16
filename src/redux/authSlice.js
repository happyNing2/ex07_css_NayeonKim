import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, regThunk } from "../service/authThunk";
import { createLoadingReducers } from "./commonLoadingHandlers";

const initialState = {
    isLoggedIn : false, 
    id : null,
    loading : false, error : null, result : 0
}
const savedAuth = sessionStorage.getItem("auth");
const authSlice = createSlice({
    name : "auth",
    initialState : savedAuth ? JSON.parse(savedAuth) : initialState,
    reducers : {
        login : (state, action) => {
            state.isLoggedIn = true;
            state.id = action.payload.id;
            // console.log("login authSlice", state);
            sessionStorage.setItem("auth", JSON.stringify({...state}))
        },
        logout : (state) => {
            sessionStorage.clear();
            return initialState;
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(loginThunk.fulfilled, (state, action) => {
            state.result = action.payload;
            state.loading = false;
            state.error = null;
        })
        createLoadingReducers(builder, loginThunk);

        builder
        .addCase(regThunk.fulfilled, (state, action) => {
            console.log("regThunk action : ", action.payload)
            console.log("regTHunk state : ", state);
            state.loading = false;
            state.error = null
        })
        createLoadingReducers(builder, regThunk);
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice;