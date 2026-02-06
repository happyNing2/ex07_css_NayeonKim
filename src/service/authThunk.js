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
        const formData = new URLSearchParams();
        formData.append("id", 4);
        Object.entries(user).forEach(([key, value]) => {
            formData.append(key, value);
        });
        // console.log("reg formData : ", formData.toString());
        
        const res = await fetch(
            path + "members",
            {
                method : "post",
                headers : {
                    "Content-Type" : "application/x-www-form-urlencoded"
                },
                body : formData
            }
        )
        // console.log("res ; ", res);
        return res.ok;
        // const past_num = data_set.length;
        // // id 존재하는지 확인
        // const data = data_set.filter(data => data.id === user.id)[0];
        // // console.log("regThunk filtered data", data);
        // // console.log("reThunk data undefined?", typeof data == "undefined" );
        // if (typeof data === "undefined") {// 기존에 데이터가 없다면 새로
        //     data_set = data_set.concat([{id : user.id, password : user.password, role : user.role}])
        //     // console.log("data_set after reg Thunk : ", data_set)
        //     const now_num = data_set.length;
        //     if (past_num < now_num )
        //         return await {result : 0, id : user.id, password : user.password, role : user.role};
        //     else 
        //         return 1;
        // }
        // return 1;
    }
)


export const memberThunk = createAsyncThunk(
    "memberThunk",
    async (start) => {
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
    async (id) => {
        
        // console.log("memberDeleteTHunk data : ", data_set);
        // return await data_set;

        const res = await fetch(path + "members/" + id, {method:"delete"});
        return res.json();

    }
)

export const memberModifyThunk = createAsyncThunk(
    "memberModifyThunk",
    async ({id, user}) => {
        
        const formData = new URLSearchParams();
        Object.entries(user).forEach(([key, value]) => {
            formData.append(key, value);
        });

        
        console.log("memberModifyThunk id, user" , id, user);
        const res = await fetch(path + "members/" + id, 
            {
                method:"put", 
                headers : {
                    "Content-Type" : "application/x-www-form-urlencoded"
                },
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