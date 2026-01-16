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
    
    const {id, pwd} = useSelector(state => {
        return state.input.login;
    })

    const onChange = (e) => {
        const {name, value} = e.target;
        dispatch(inputSlice.actions.changeinput({name, value, form:"login"}));
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("login submit : ", id, pwd);
        const result = await dispatch(loginThunk({id : id, password : pwd}))
        console.log("login payload result ", result.payload);
        if (result.payload.result === 0) {
            dispatch(login({id : id}));
            navigate("/");
        }
    }
    return (
        <>
            <HeaderCom />
            <LoginCom onChange={onChange} onSubmit={onSubmit} id={id} pwd={pwd}/>
        </>
    )
}
export default LoginCon;