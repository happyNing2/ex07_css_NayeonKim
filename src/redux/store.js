import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice";
import authSlice from "./authSlice";
import memberDataSlice from "./memberDataSlice";

const store = configureStore({
    reducer : {
        input : inputSlice.reducer,
        auth : authSlice.reducer,
        reg : authSlice.reducer,
        member : memberDataSlice.reducer,
    }
});
export default store;