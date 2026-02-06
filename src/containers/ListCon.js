import { useDispatch, useSelector } from "react-redux";
import HeaderCom from "../components/common/HeaderCom";
import ListCom from "../components/ListCom";
import { useEffect } from "react";
import { memberThunk } from "../service/authThunk";
import memberDataSlice from "../redux/memberDataSlice";
import { useSearchParams } from "react-router-dom";

function ListCon() {
    const dispatch = useDispatch();
    const [params] = useSearchParams();
    const start = params.get("start");
    useEffect( ()=> {
        // dispatch(memberThunk("mem"))
        dispatch(memberThunk(start))
    }, [start, dispatch]);
    
    const memberList = useSelector((state) => {
        // console.log("listcon state : ", state.member.data['data'])
        // console.log("listcon member : ", state.member);
        console.log("listcon member.list : ", state.member.list);
        return state.member.list.data;
    })

    // const {loading, error} = useSelector((state)=>{
    //     console.log("listcon state : ", state)
    //     return state.memberData
    // })
    
    return (
        <>
            <HeaderCom />
            <ListCom memberList={memberList}/>
        </>
    )
}
export default ListCon;