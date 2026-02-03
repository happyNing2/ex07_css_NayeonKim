import { useDispatch, useSelector } from "react-redux";
import HeaderCom from "../components/common/HeaderCom";
import ListCom from "../components/ListCom";
import { useEffect } from "react";
import { memberThunk } from "../service/authThunk";
import memberDataSlice from "../redux/memberDataSlice";

function ListCon() {
    const dispatch = useDispatch();
    useEffect( ()=> {
        // dispatch(memberThunk("mem"))
        dispatch(memberThunk("member"))
    }, [dispatch]);
    
    const memberList = useSelector((state) => {
        // console.log("listcon state : ", state.member.data['data'])
        // console.log("listcon member : ", state.member);
        // console.log("listcon member.list : ", state.member.list);
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