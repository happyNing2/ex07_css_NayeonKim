import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice";
import authSlice from "./authSlice";
import memberDataSlice from "./memberDataSlice";
import postSlice from "./postSlice";

const store = configureStore({
    reducer : {
        input : inputSlice.reducer,
        auth : authSlice.reducer,
        reg : authSlice.reducer,
        member : memberDataSlice.reducer,
        post : postSlice.reducer
    }
});
export default store;