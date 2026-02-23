import { useDispatch, useSelector } from "react-redux";
import BoardModCom from "../components/BoardModCom";
import HeaderCom from "../components/common/HeaderCom";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { postModifyThunk, postOneThunk } from "../service/postThunk";
import postSlice from "../redux/postSlice";

function BoardModCon(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {number} = useParams();
    const {isLoggedIn, username} = useSelector(state => state.auth);

    const data = useSelector(state => {
        return state.post.one.data;
    })
    // const modData = useSelector(state =>{
    //     return state.post.modify.data;
    // })
    // console.log(data)
    
    useEffect(() => {
        if (!isLoggedIn) {
            alert("로그인 해주세요");
            navigate("/login");
            return;
        }

        dispatch(postOneThunk({
            username: username ?? null,
            number: Number(number)
        }));

    }, [dispatch, username, number, isLoggedIn, navigate]);
    // console.log(data)
    const onChange = (e) => {
        const {name, value} = e.target;
        dispatch(postSlice.actions.changeinput({name, value, form : "one"}))
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        await dispatch(postModifyThunk({
                title : data.title,
                content : data.content,
                number : number,
                username : username
        }))

        navigate("/board/" + number);
    }
    return (
        <>
            <HeaderCom />
            <BoardModCom data={data} onChange={onChange} onSubmit={onSubmit}/>
        </>
        
    )
}
export default BoardModCon;