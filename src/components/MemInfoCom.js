import styled from "styled-components";
import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent";
import { ProductTitle } from "./common/StyleProduct";

const InfoBox = styled.div`
    width : 400px;
    height : 500px;
    border : 1px solid black;
    border-radius : 5px;
    margin : auto;
`;

const InputWrap = styled.div`
    width : 350px;
    height : 80px;
    margin : auto;
    margin-top : 10px;
`;

const StyledSpan = styled.span`
    font-size : 25px;
`;

const StyledInput = styled.input`
    border : none;
    font-size : 20px;
`;

const MemBtn = styled.button`
    border-radius : 5px;
    font-weight : bold;
    justify-content : left;
    border : none;
    height : 30px;
    width : 100px;
    margin-right : 5px;
    cursor :pointer;
    &:hover {
        background-color : gray;
    }
`; 


function MemInfoCom({imageUrl, data, onChange, deleteMem, modifyMem, onFileChange}) {
    return (
        <>
            <StyleContentBlock>
                <StyleContentWrap>
                    <ProductTitle>
                        개 인 정 보
                    </ProductTitle>
                    <div>
                        <InfoBox>
                            <form>
                            {/* <form > onSubmit={modifyMem} */}
                                {imageUrl && (
                                                <>
                                                    <img src={imageUrl} marginLeft="10px" width="100px" height="100px" alt="User Profile" />
                                                    <hr />
                                                </>
                                            )}
                                <StyledInput type="file" name="file" onChange={onFileChange}></StyledInput> 
                                
                                {
                                    data && ["username", "password", "role"].map ( key => (
                                        <InputWrap>
                                            <StyledSpan>{key}</StyledSpan><br></br>
                                            <StyledSpan>-</StyledSpan>
                                            <StyledInput name={key} value={data[key]} onChange={onChange}></StyledInput>
                                            <hr></hr>
                                        </InputWrap>
                                    ))
                                }
                                <InputWrap>
                                    <MemBtn onClick={deleteMem}>삭제</MemBtn> 
                                    <MemBtn onClick={modifyMem}>수정</MemBtn> 
                                </InputWrap>
                            </form>
                        </InfoBox>
                    </div>
                </StyleContentWrap>
            </StyleContentBlock>
        </>
    )
}
export default MemInfoCom;