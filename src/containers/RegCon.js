import { useDispatch, useSelector } from "react-redux";
import HeaderCom from "../components/common/HeaderCom";
import RegCom from "../components/RegCom";
import { useNavigate } from "react-router-dom";
import inputSlice from "../redux/inputSlice";
import { regThunk } from "../service/authThunk";

function RegCon() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {username, password, role, file} = useSelector(state => {
        return state.input.register;
    })

    const onChange = (e) => {
        const {name, value} = e.target;
        dispatch(inputSlice.actions.changeinput({name, value, form : "register"}));
        // console.log("reg onchange input : ", id, pwd, role)
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        // const formData = new FormData(e.target);
        // console.log("regcon e target : " + e.target)
        // console.log("regcon formdata : " + formData.toString())
        // const {payload} = await dispatch(regThunk(formData))
        
        const result = await dispatch(regThunk(
            {
                username : username, 
                password : password, 
                role : role, 
                file : file
            }
        ))
        // console.log("regcon result ", result.payload);
        if (result.payload === true)
            navigate("/login");
        else
            alert("회원가입 실패");
        // if (result.payload.result === 0)
        //     navigate("/login")
        // else
        //     alert("회원가입 실패")
    }

    const onFileChange = (e) => {
        const file = e.target.files[0];   // ⭐ 진짜 파일 객체
        dispatch(inputSlice.actions.changeinput({
            name: "file",
            value: file,
            form: "register"
        }));
    };

    return (
        <>
            <HeaderCom />
            <RegCom onChange={onChange} onSubmit={onSubmit} username={username} password={password} role={role} onFileChange={onFileChange} />
        </>
    )
}
export default RegCon;