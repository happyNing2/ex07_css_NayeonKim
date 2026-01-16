import {createSlice} from "@reduxjs/toolkit";

const inputSlice = createSlice({
    name : "input",
    initialState : {
        login : {id : "", pwd : ""},
        register : {id : "", pwd : "", role : ""}
    },
    reducers : {
        changeinput : (state, action) => {
            const {form, name, value} = action.payload;
            state[form][name] = value;
        }
    }
})

export const {changeinput} = inputSlice.actions;
export default inputSlice;