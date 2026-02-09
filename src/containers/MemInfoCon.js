import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import HeaderCom from "../components/common/HeaderCom";
import MemInfoCom from "../components/MemInfoCom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { memberDeleteThunk, memberInfoThunk, memberModifyThunk, memberThunk } from "../service/authThunk";
import memberDataSlice from "../redux/memberDataSlice";
import inputSlice from "../redux/inputSlice";
// import inputSlice from "../redux/inputSlice";

const path = "http://localhost:10000"
function MemInfoCon(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const [params] = useSearchParams();
    

    const { isLoggedIn } = useSelector(state => state.auth);
   
    const data = useSelector(state => {
        return state.member.modify;
    })
    
    const user_id = params.get("id");
    const [imageUrl, setImageUrl] = useState();
    const [file, setFile] = useState(null);
    // const {username} = useParams();
    // console.log("id : ", user_id);
    useEffect( () => {
        // console.log("use effect");
        if (!isLoggedIn) {
            navigate("/login");
        }
        const getData = async () => {
            const memberData = await dispatch(memberInfoThunk(user_id));
            console.log("fileName : ", memberData);
            if (memberData?.payload.fileName){
                const res = await fetch(`${path}/members/${memberData.payload.fileName}/image`);
                // console.log("res : " + res.json())
                setImageUrl(URL.createObjectURL(await res.blob()))
                // console.log(memberData.fileName);
            }
        }
        getData();
    }, [isLoggedIn, navigate, user_id, dispatch]);
    // console.log("memberinfo data : ", data);
    // console.log("memberinfo data id pwd role: ", id, password, role)
    const onChange = (e) => {
        const {name, value} = e.target;
        dispatch(memberDataSlice.actions.changeinput({name, value, form : "modify"}))
        // console.log("memberinfocon change input : ", data)
    }

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    //onSubmit
    const deleteMem = async (e) => {
        e.preventDefault();
        console.log("meminfocon del : ", data)
        // await dispatch(memberDeleteThunk(data['id'], data['fileName']));
        await dispatch(memberDeleteThunk(data));
        navigate("/list");
    }  

    const modifyMem = async (e) => {
        e.preventDefault();
        console.log("button user_id, data : ", user_id, data);

        await dispatch(memberModifyThunk({
            id: user_id,
            user: data,
            file: file
        }));
        
        navigate("/memberinfo?id=" + data["id"]);
        // navigate("/list");
    }


    
    return (
        <>
            <HeaderCom />
            <MemInfoCom imageUrl={imageUrl} data={data} onChange={onChange} deleteMem={deleteMem} modifyMem={modifyMem} onFileChange={onFileChange} />

            
        </>
    )
}
export default MemInfoCon;