import { useDispatch, useSelector } from "react-redux";
import HeaderCom from "../components/common/HeaderCom";
import RegCom from "../components/RegCom";
import { useNavigate } from "react-router-dom";
import inputSlice from "../redux/inputSlice";
import { regThunk } from "../service/authThunk";

function RegCon() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {username, password, role} = useSelector(state => {
        return state.input.register;
    })

    const onChange = (e) => {
        const {name, value} = e.target;
        dispatch(inputSlice.actions.changeinput({name, value, form : "register"}));
        // console.log("reg onchange input : ", id, pwd, role)
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        // console.log("register submit : ", id, pwd, role);
        const result = await dispatch(regThunk({username : username, password : password, role : role}))
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
    return (
        <>
            <HeaderCom />
            <RegCom onChange={onChange} onSubmit={onSubmit} username={username} password={password} role={role} />
        </>
    )
}
export default RegCon;