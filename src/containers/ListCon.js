import { useDispatch, useSelector } from "react-redux";
import HeaderCom from "../components/common/HeaderCom";
import ListCom from "../components/ListCom";
import { useEffect } from "react";
import { memberThunk } from "../service/authThunk";

function ListCon() {
    const dispatch = useDispatch();
    useEffect( ()=> {
        dispatch(memberThunk("mem"))
    }, [dispatch]);
    
    const memberList = useSelector((state) => {
        // console.log("listcon state : ", state.member.data['data'])
        // console.log("listcon state : ", state.member.data)
        return state.member.data;
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