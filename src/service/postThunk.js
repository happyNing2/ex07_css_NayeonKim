import { createAsyncThunk } from "@reduxjs/toolkit"

const path = "http://localhost:10000/";

// 게시글 리스트 불러오기
export const postThunk = createAsyncThunk(
    "postThunk",
    async () => { // 나중에 pagenation 추가
        // console.log("postThunk start : ")
        // const res = await fetch(path + "members?start=" + start, {method:"get"});
        const res = await fetch(path + "post",
            {
                method : "get"
            }
        )
        const data = await res.json();
        // console.log("postThunk : " +data);
        return data;
    }
)

export const postInsertThunk = createAsyncThunk(
    "postInsertThunk",
    async (postData, {getState}) => {
        const state = getState();
        const token = state.auth.token;

        const formData = new FormData();
        Object.entries(postData).forEach(([key, value]) => {
            formData.append(key, value);
        });
        // console.log("postInsertThunk formdata" , formData.toString());
        const res = await fetch(path + "post",
            {
                method : "post",
                headers : {
                    "Authorization" : `Bearer ${token}`
                },
                body : formData
            }
        )
        const data = await res.json();
        // console.log("postInsertThunk: " + res.json());
        return data;
    }
)

export const postOneThunk = createAsyncThunk(
    "postOneThunk",
    async (queryData, {getState}) => {
        const state = getState();
        const token = state.auth.token;

        const res = await fetch(
            path + "post/" + queryData.number + "?username=" + queryData.username,
            {
                method : "get",
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            }
        )
        const json_res = await res.json();
        return json_res;

    }
)

export const PostDeleteThunk = createAsyncThunk(
    "postDeleteThunk",
    async (queryData, {getState}) => {
        const state = getState();
        const token = state.auth.token;

        const res = await fetch(
            path + "post/" + queryData.number + "?username=" + queryData.username,
            {
                method : "delete",
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            }
        )
        const json_res = await res.json();
        return json_res;
    }
)

export const postModifyThunk = createAsyncThunk(
    "postModifyThunk",
    async (queryData, {getState}) => {
        const state = getState();
        const token = state.auth.token;

        const formData = new FormData();
        formData.append("title", queryData.title);
        formData.append("content", queryData.content);

        const res = await fetch(
            path + "post/" + queryData.number + "?username" + queryData.username,
            {
                method : "put",
                headers : {
                    "Authorization" : `Bearer ${token}`
                },
                body : formData
            }
        )

        if (res.status === 404) 
            throw new Error("게시글이 존재하지 않습니다")
        else if (res.status === 401)
            throw new Error("로그인 필요")
        else if (res.status === 403)
            throw new Error("게시글 수정 권한이 없습니다")
        const json_res = await res.json();
        return json_res;
    }
)