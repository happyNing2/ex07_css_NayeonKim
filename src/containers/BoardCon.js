import { useDispatch, useSelector } from "react-redux";
import BoardCom from "../components/BoardCom";
import HeaderCom from "../components/common/HeaderCom";
import { useEffect } from "react";
import { postLikedThunk, postThunk } from "../service/postThunk";

function BoardCon(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postThunk())
    }, [dispatch]);

    const postList = useSelector((state) => {
        // console.log(state.post.list.data)
        return state.post.list.data;
    })

    const onLiked = (like) => {
        dispatch(postLikedThunk(like))
    }

    return (
        <>
            <HeaderCom />
            <BoardCom onLiked={onLiked} postList={postList}/>
        </>
    )
}
export default BoardCon;