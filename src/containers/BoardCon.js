import { useDispatch, useSelector } from "react-redux";
import BoardCom from "../components/BoardCom";
import HeaderCom from "../components/common/HeaderCom";
import { useEffect } from "react";
import { postThunk } from "../service/postThunk";

function BoardCon(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postThunk())
    }, [dispatch]);

    const postList = useSelector((state) => {
        // console.log("postcon state : ", state.post.list.data);
        return state.post.list.data;
    })

    return (
        <>
            <HeaderCom />
            <BoardCom postList={postList}/>
        </>
    )
}
export default BoardCon;