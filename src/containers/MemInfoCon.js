import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import HeaderCom from "../components/common/HeaderCom";
import MemInfoCom from "../components/MemInfoCom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { memberDeleteThunk, memberInfoThunk, memberModifyThunk, memberThunk } from "../service/authThunk";
import memberDataSlice from "../redux/memberDataSlice";
// import inputSlice from "../redux/inputSlice";

function MemInfoCon(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [params] = useSearchParams();

    const { isLoggedIn } = useSelector(state => state.auth);
    const data = useSelector(state => {
        return state.member.modify;
    })
    
    const user_id = params.get("id");
    // const {username} = useParams();
    // console.log("id : ", user_id);
    useEffect( () => {
        // console.log("use effect");
        if (!isLoggedIn) {
            navigate("/login");
        }
        
        dispatch(memberInfoThunk(user_id));
    }, [isLoggedIn, navigate, user_id, dispatch]);
    // console.log("memberinfo data : ", data);
    // console.log("memberinfo data id pwd role: ", id, password, role)
    const onChange = (e) => {
        const {name, value} = e.target;
        dispatch(memberDataSlice.actions.changeinput({name, value, form : "modify"}))
        // console.log("memberinfocon change input : ", data)
    }

    //onSubmit
    const deleteMem = async (e) => {
        e.preventDefault();
        await dispatch(memberDeleteThunk(data['id']));
        navigate("/list");
    }  

    const modifyMem = async (e) => {
        e.preventDefault();
        // console.log("button user_id, data : ", user_id, data);
        await dispatch(memberModifyThunk({id : user_id, user : data}));
        navigate("/memberinfo?id=" + data["id"]);
        // navigate("/list");
    }
    
    return (
        <>
            <HeaderCom />
            <MemInfoCom data={data} onChange={onChange} deleteMem={deleteMem} modifyMem={modifyMem} />

            
        </>
    )
}
export default MemInfoCon;