import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../redux/authSlice";

const WrapBlock = styled.div`
    z-index : 1;
    background-color : white
    position: fixed; width : 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const StyleHeader = styled.header`
    margin : 0 auto; width : 1100px;
    display : flex; height : 100px; align-items : center;
`;
const StyleTitle = styled.h1`
    width : 200px;
    .link {color : black;}
    .link:hover {color : gray;}

`;
const StyleNav = styled.nav`
    display : flex;
    justify-content : space-between;
    width: 100%;
    ul {display : flex;}
    ul li {margin-right : 30px;}
    .menu li a {font-size:20px; font-weight: bold;}
    a {color : black;}
    a:hover {color : gray;}
`;

function HeaderCom() {
    const {id, isLoggedIn} = useSelector(state => {
        return state.auth;
    })
    const dispatch = useDispatch();
    const onLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
    }
    return (
        <>
            <WrapBlock>
                <StyleHeader>
                    <StyleTitle>
                        <Link to="/" className="link">춘봉</Link>
                        </StyleTitle>
                        <StyleNav>
                            <ul className="menu">
                                <li><Link to="/">사료</Link></li>
                                <li><Link to="/">간식</Link></li>
                                <li><Link to="/list">LIST</Link></li>
                            </ul>
                            <ul>
                                {isLoggedIn 
                                    ? <>
                                    <li>{id} 님 &nbsp;</li>
                                    <li><Link to="/logout" onClick={onLogout}>로그아웃</Link></li>
                                    </>
                                    : <>
                                    <li><Link to="/login">로그인</Link></li>
                                    <li><Link to="/register">회원가입</Link></li>
                                    </>
                                }
                            </ul>
                        </StyleNav>
                </StyleHeader>
            </WrapBlock>
        </>
    )
}
export default HeaderCom;