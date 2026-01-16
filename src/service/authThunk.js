import { createAsyncThunk } from "@reduxjs/toolkit"

let data_set = [
    {id : "aaa", password : "aaa", role : "USER"},
    {id : "bbb", password : "bbb", role : "USER"},
    {id : "ccc", password : "ccc", role : "USER"},
]

export const loginThunk = createAsyncThunk(
    "loginThunk",
    async (user) => {
        const data = data_set.filter(data => data.id === user.id)[0];
        // console.log("login filtered data : ", data)
        let result = 1;
        if (! data) {
            alert("아이디 없음")
            return {result};
        }
        
        // console.log("login Thunk get Data: ",data.password, user.password);
        if(data.password === user.password )
            result = 0;
        return await {result, id : user.id} // 성공 0, 실패 1
    }
)

export const regThunk = createAsyncThunk(
    "regThunk",
    async (user) => {
        const past_num = data_set.length;
        // id 존재하는지 확인
        const data = data_set.filter(data => data.id === user.id)[0];
        // console.log("regThunk filtered data", data);
        // console.log("reThunk data undefined?", typeof data == "undefined" );
        if (typeof data === "undefined") {// 기존에 데이터가 없다면 새로
            data_set = data_set.concat([{id : user.id, password : user.password, role : user.role}])
            // console.log("data_set after reg Thunk : ", data_set)
            const now_num = data_set.length;
            if (past_num < now_num )
                return await {result : 0, id : user.id, password : user.password, role : user.role};
            else 
                return 1;
        }
        return 1;
    }
)

export const memberThunk = createAsyncThunk(
    "memberThunk",
    async () => {
        // console.log("memberThunk : ", [...data_set]);
        return await {result : 0, data : [...data_set]};
    }
)

export const memberInfoThunk = createAsyncThunk(
    "memberInfoThunk",
    async (id) => {
        const data = data_set.filter(data => data.id === id)[0];
        // console.log("memberInfoThunk memberinfo data : ", data)
        return await data;
    }
)

export const memberDeleteThunk = createAsyncThunk(
    "memeberDeleteThunk",
    async (id) => {
        data_set = data_set.filter(data => data.id !== id);
        // console.log("memberDeleteTHunk data : ", data_set);
        return await data_set;
    }
)

export const memberModifyThunk = createAsyncThunk(
    "memberModifyThunk",
    async (data) => {
        const id = data[0];
        const user = data[1];
        // data index 
        for (let idx=0; idx < data_set.length; idx++) {
            // console.log("idx : ", idx);
            if (data_set[idx]['id'] === id){
                // console.log("해당 id, idx값 : ", id, idx);
                data_set[idx] = {
                    ...data_set[idx],
                    id : user.id,
                    password :user.password,
                    role : user.role
                }
                // console.log("실행 1 완료 : ", data_set)
            }

            
        }
        return await [...data_set];
    }
)