import { createAsyncThunk } from "@reduxjs/toolkit"

let data_set = [
    {id : 1, username : "aaa", password : "aaa", role : "USER"},
    {id : 2, username : "bbb", password : "bbb", role : "USER"},
    {id : 3, username : "ccc", password : "ccc", role : "USER"},
]

const path = "http://localhost:10000/";

export const loginThunk = createAsyncThunk(
    "loginThunk",
    async (user) => {
        // const data = data_set.filter(data => data.id === user.id)[0];
        // console.log("loginThunk user: ", JSON.stringify(user));
        // console.log("loginThunk path : ", path + "members/login");
        const res = await fetch(
            path + "members/login", 
            {
                method : "post",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(user)
            }
        )
        // let result = 1;
        // if (! data) {
        //     alert("아이디 없음")
        //     return {result};
        // }
        
        // // console.log("login Thunk get Data: ",data.password, user.password);
        // if(data.password === user.password )
        //     result = 0;
        // return await {result, id : user.id} // 성공 0, 실패 1
        console.log("loginThunk working : ", res);
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
    async (id) => {
        const res = await fetch(path + "members/" + id , {method:"get"});
        // console.log("memberInfoThunk res", res);
        return res.json();
        // const data = data_set.filter(data => data.id === id)[0];
        // console.log("memberInfoThunk memberinfo data : ", data)
        // console.log("memberinfoThunk state.member", state.member)
        // return await data;
        
    }
)

export const memberDeleteThunk = createAsyncThunk(
    "memeberDeleteThunk",
    async (user) => {
        
        console.log("memberDeleteTHunk data : ",user);
        // return await data_set;

        const res = await fetch(path + "members/" + user.id, {method:"delete", body : user.fileName});
        // console.log("memberDeleteThunk res : ", res );
        return res.json();

    }
)

export const memberModifyThunk = createAsyncThunk(
    "memberModifyThunk",
    async ({id, user, file}) => {
        
        const formData = new FormData();
        Object.entries(user).forEach(([key, value]) => {
            formData.append(key, value);
        });

        formData.append("file", file);

        console.log([...formData.entries()]);
        // console.log("memberModifyThunk formdata" , formData.toString());
        const res = await fetch(path + "members/" + id, 
            {
                method:"put", 
                // headers : {
                //     "Content-Type" : "application/x-www-form-urlencoded"
                // },
                body : formData
            }
        );
        
        return res.json();
    }
)
        // data index 
        // for (let idx=0; idx < data_set.length; idx++) {
        //     // console.log("idx : ", idx);
        //     if (data_set[idx]['id'] === id){
        //         // console.log("해당 id, idx값 : ", id, idx);
        //         data_set[idx] = {
        //             ...data_set[idx],
        //             id : user.id,
        //             password :user.password,
        //             role : user.role
        //         }
        //         // console.log("실행 1 완료 : ", data_set)
        //     }

            
        // }
        // return await [...data_set];