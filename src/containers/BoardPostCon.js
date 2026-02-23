import { useDispatch, useSelector } from "react-redux";
import BoardPostCom from "../components/BoardPostCom";
import HeaderCom from "../components/common/HeaderCom";
import { useNavigate } from "react-router-dom";
import postSlice from "../redux/postSlice";
import { postInsertThunk } from "../service/postThunk";

function BoardPostCon(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {isLoggedIn, username} = useSelector(state => state.auth);
    // console.log(isLoggedIn, username);
    const {title, content} = useSelector(state => {
        // console.log(state.post.post);
        return state.post.post.data;
    })

    const onChange = (e) => {
        const {name, value} = e.target;
        dispatch(postSlice.actions.changeinput({name, value, form : "post"}))
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("post submit : ", title, content);
        const postData = {
            title : title,
            content : content
        }
        try {
            const result = await dispatch(postInsertThunk(postData))
            console.log("post insert result : " + result);
            navigate("/board/list");
        }
        catch(error) {
            alert("잘못된 접근입니다.");
            console.log(error);
            navigate("/board/list");
        }
    }
    

    return(
        <>
            <HeaderCom />
            <BoardPostCom onChange={onChange} onSubmit={onSubmit} title={title} content={content}/>
        </>
    )
}
export default BoardPostCon;