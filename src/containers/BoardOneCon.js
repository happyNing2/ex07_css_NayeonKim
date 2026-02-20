import { useDispatch, useSelector } from "react-redux";
import BoardOneCom from "../components/BoardOneCom";
import HeaderCom from "../components/common/HeaderCom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { postOneThunk } from "../service/authThunk";

function BoardOneCon(){
    const dispatch = useDispatch();
    
    const {number} = useParams();
    const { username, isLoggedIn } = useSelector((state) => state.auth);
   
    useEffect(() => {
        // console.log("useEffect")
        if (number) {
            dispatch(postOneThunk({
                username : username ?? null,
                number : Number(number)
            }));
        }
    }, [dispatch, number, username])

    const data = useSelector(state => {
        // console.log(state.post.one.data)
        return state.post.one.data;
    })
    //  console.log("data : " , data);
    

    

    return(
        <>
            <HeaderCom />
            <BoardOneCom data={data} isLoggedIn={isLoggedIn}/>
        </>
    )
}
export default BoardOneCon;