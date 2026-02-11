import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeaderCom from "../components/common/HeaderCom";
import LoginCom from "../components/LoginCom";
import inputSlice from "../redux/inputSlice";
import { loginThunk } from "../service/authThunk";
import { login } from "../redux/authSlice";

function LoginCon() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const {username, password} = useSelector(state => {
        return state.input.login;
    })

    const onChange = (e) => {
        const {name, value} = e.target;
        dispatch(inputSlice.actions.changeinput({name, value, form:"login"}));
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("login submit : ", username, password);
        const result = await dispatch(loginThunk({username : username, password : password}))
        
        if (result.payload.token !== null) {
            dispatch(login({username : username, token : result.payload.token}));
            navigate("/");
        }
        else {
            alert("잘못된 username 혹은 password");
        }
    }
    return (
        <>
            <HeaderCom />
            <LoginCom onChange={onChange} onSubmit={onSubmit} username={username} password={password}/>
        </>
    )
}
export default LoginCon;