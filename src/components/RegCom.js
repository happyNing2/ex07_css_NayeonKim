import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent";
import {ProductTitle} from "./common/StyleProduct";
// import StyledForm from "./common/StyledForm";
import StyledInput from "./common/StyleInput";
import styled from "styled-components";

const StyledForm = styled.form`
    justify-content: center;
    margin : auto;
    text-align : center;
    width : 250px
`

const RegBtn = styled.button`
    border-radius : 5px;
    font-weight : bold;
    justify-content : left;
    border : none;
    height : 30px;
    cursor :pointer;
    &:hover {
        background-color : gray;
    }
`; 


function RegCom({username, password, role, onChange, onSubmit, onFileChange}) {
    return (
        <>
            <StyleContentBlock>
                <StyleContentWrap>
                    <ProductTitle>
                        회 원 가 입
                    </ProductTitle>
=                   <div>
                        <StyledForm onSubmit={onSubmit}>
                            <StyledInput value={username} name="username" onChange={onChange} placeholder="input username"></StyledInput><br></br>
                            <StyledInput value={password} name="password" onChange={onChange} placeholder="input password"></StyledInput><br></br>
                            <StyledInput value={role} name="role" onChange={onChange} placeholder="input role"></StyledInput><br></br>
                            <StyledInput type="file" name="file" onChange={onFileChange}></StyledInput> 
                            <div style={{"textAlign" : "left", "marginTop" : "10px"}}>
                                <RegBtn>REGISTER</RegBtn>
                            </div>
                            
                        </StyledForm>
=                   </div>
                    
                </StyleContentWrap>
            </StyleContentBlock>
        </>
    )
}
export default RegCom;