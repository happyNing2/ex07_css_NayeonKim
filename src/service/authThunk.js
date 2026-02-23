import { createAsyncThunk } from "@reduxjs/toolkit"

const path = "http://localhost:10000/";

export const loginThunk = createAsyncThunk(
    "loginThunk",
    async (user) => {
        const res = await fetch(
            path + "auth/login", 
            {
                method : "post",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(user)
            }
        )

        // console.log("loginThunk working : ", res.json());
        return res.json();
    }
)

export const regThunk = createAsyncThunk(
    "regThunk",
    async (user) => {
        // const formData = new URLSearchParams();
        const formData = new FormData();
        
        Object.entries(user).forEach(([key, value]) => {
            formData.append(key, value);
        });
        console.log("reg formData : ", formData.toString());
        console.log("reg formData user : ", user);
        
        const res = await fetch(
            path + "members",
            {
                method : "post",
                // headers : {
                //     "Content-Type" : "application/x-www-form-urlencoded"
                // },
                body : formData
            }
        )

        return res.ok;

    }
)


export const memberThunk = createAsyncThunk(
    "memberThunk",
    async (start) => {
        console.log("memberThunk start : " + start)
        const res = await fetch(path + "members?start=" + start, {method:"get"});
        const data = await res.json();
        // console.log("memberThunk : " +res.json());

        return data;
    }
)

export const memberInfoThunk = createAsyncThunk(
    "memberInfoThunk",
    async (id, {getState}) => {
        const state = getState();
        const token = state.auth.token;
        const res = await fetch(
            path + "members/" + id , 
            {
                method:"get",
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            }
        );

        return res.json();  
    }
)

export const memberDeleteThunk = createAsyncThunk(
    "memeberDeleteThunk",
    async (user, {getState}) => {
        const state = getState();
        const token = state.auth.token;
        console.log("memberDeleteTHunk data : ",user);
        // return await data_set;

        const res = await fetch(path + "members/" + user.id, 
            {
                method:"delete", 
                body : user.fileName,
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            }
        );
        // console.log("memberDeleteThunk res : ", res );
        return res.json();

    }
)

export const memberModifyThunk = createAsyncThunk(
    "memberModifyThunk",
    async ({id, user, file}, {getState}) => {
        const state = getState();
        const token = state.auth.token;

        const formData = new FormData();
        Object.entries(user).forEach(([key, value]) => {
            formData.append(key, value);
        });

        formData.append("file", file);

        // console.log([...formData.entries()]);
        // console.log("memberModifyThunk formdata" , formData.toString());
        const res = await fetch(path + "members/" + id, 
            {
                method:"put", 
                headers : {
                    "Authorization" : `Bearer ${token}`
                //     "Content-Type" : "application/x-www-form-urlencoded"
                },
                body : formData
            }
        );
        
        return res.json();
    }
)
