import { createSlice } from "@reduxjs/toolkit";
import { postInsertThunk, postOneThunk, postThunk } from "../service/authThunk";
import { createLoadingReducers } from "./commonLoadingHandlers";
import { changeinput } from "./inputSlice";

const postSlice = createSlice({
    name : "post",
    initialState : {
        list : {data : null, loading : null, error : null}, // 게시글 리스트
        post : {data : {title : null, content : null}, loading : null, error : null}, // 글 작성
        one : {data : {title : null, content : null, postCount : null}, loading :null, error : null} // 글 조회
    },
    reducers : {
        changeinput: (state, action) => {
            const {form, name, value} = action.payload;
            state[form]['data'][name] = value;
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(postThunk.fulfilled, (state, action) => {
            state.list.data = action.payload;
            state.list.loading = false;
            state.list.error = null;
        })
        createLoadingReducers(builder, postThunk);
        
        builder
        .addCase(postInsertThunk.fulfilled, (state, action) => {
            state.post.data = action.payload;
            state.post.loading = false;
            state.post.error = null;
        })
        createLoadingReducers(builder, postInsertThunk);

        builder
        .addCase(postOneThunk.fulfilled, (state, action) => {
            state.one.data = action.payload;
            state.post.loading = false;
            state.post.error = null;
        })
        createLoadingReducers(builder, postOneThunk)
    }
})
export default postSlice;