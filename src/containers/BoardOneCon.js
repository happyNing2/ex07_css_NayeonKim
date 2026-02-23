import { useDispatch, useSelector } from "react-redux";
import BoardOneCom from "../components/BoardOneCom";
import HeaderCom from "../components/common/HeaderCom";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PostDeleteThunk, postOneThunk } from "../service/postThunk";

function BoardOneCon(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
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

    const deletePost = async (e) => {
        e.preventDefault();
        try {
            await dispatch(PostDeleteThunk({
                number : number,
                username : username
            }))
            navigate("/board/list");
        }
        catch(error) {
            alert(error);
            navigate("/board/" + number);
        }
    }
    
    return(
        <>
            <HeaderCom />
            <BoardOneCom data={data} isLoggedIn={isLoggedIn} deletePost={deletePost}/>
        </>
    )
}
export default BoardOneCon;