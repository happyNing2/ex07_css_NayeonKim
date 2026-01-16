import {createSlice} from "@reduxjs/toolkit";
import { memberDeleteThunk, memberInfoThunk, memberModifyThunk, memberThunk } from "../service/authThunk";
import { createLoadingReducers } from "./commonLoadingHandlers";
import { changeinput } from "./inputSlice";

const memberDataSlice = createSlice({
    name : "member",
    initialState : {
        list : {data: null, loading : null, error : null},
        modify : {id : "", pwd : "", role : ""}
    },
    reducers : {
        changeinput : (state, action) => {
            const {form, name, value} = action.payload;
            state[form][name] = value;
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(memberThunk.fulfilled, (state, action) =>{
            // console.log("memberdataslice action.payload", action.payload);
            
            state.data = action.payload.data
            state.loading = false;
            state.error = null;
        })
        createLoadingReducers(builder, memberThunk);

        builder
        .addCase(memberInfoThunk.fulfilled, (state, action) => {
            // console.log("memberdataslice info action.payload", action.payload);
            
            state.modify = action.payload;
            // console.log("memberdataslice info state", state.modify);
        })
        createLoadingReducers(builder, memberInfoThunk);

        builder
        .addCase(memberDeleteThunk.fulfilled, (state, action) => {
            // console.log("member delete payload : ", action.payload)
            // state.list.data = action.payload;
        })
        createLoadingReducers(builder, memberDeleteThunk);

        builder
        .addCase(memberModifyThunk.fulfilled, (state, action) =>{
            // console.log("member modify payload : ", action.payload)
        })
        createLoadingReducers(builder, memberModifyThunk);

    }
})
export default memberDataSlice;