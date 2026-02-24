import { createSlice } from "@reduxjs/toolkit";
import { PostDeleteThunk, postInsertThunk, postLikedThunk, postModifyThunk, postOneThunk, postThunk } from "../service/postThunk";
import { createLoadingReducers } from "./commonLoadingHandlers";
import { changeinput } from "./inputSlice";

const postSlice = createSlice({
    name : "post",
    initialState : {
        loading : null,
        list : {data : null, loading : null, error : null}, // 게시글 리스트
        post : {data : {title : null, content : null}, loading : null, error : null}, // 글 작성
        one : {data : {title : null, content : null, postCount : null}, loading :null, error : null}, // 글 조회
        delete : {loading : null, error : null},
        modify : {data : {title : null, content : null}, loading : null, error : null},
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
            state.one.loading = false;
            state.one.error = null;
        })
        createLoadingReducers(builder, postOneThunk)

        builder
        .addCase(PostDeleteThunk.fulfilled, (state, action) => {
            state.delete.loading = false;
            state.delete.error = null;
        })
        createLoadingReducers(builder, PostDeleteThunk)
        
        builder
        .addCase(postModifyThunk.fulfilled, (state, action) => {
            state.one.data = action.payload;
            state.one.loading = false;
            state.one.error = null;
        })
        createLoadingReducers(builder, postModifyThunk)

        builder
        .addCase(postLikedThunk.fulfilled, (state, action) => {
            state.loading = false;
            const {postId, liked} = action.payload
            const post = state.list.data.find(post => post.number === postId)

            if (post) {
                post.liked = liked;
                post.likedCount += liked ? 1 : -1;
            }
        })
        createLoadingReducers(builder, postLikedThunk)
    }
})
export default postSlice;