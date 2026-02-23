import styled from "styled-components";
import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent";
import { ProductTitle } from "./common/StyleProduct";

const ContentWrap = styled.div`
    width : 80%;
    margin : auto;
`
const PostTitle = styled.input`
    height : 30px;
    margin-top : 30px;
    width : 100%;
`
const PostContent = styled.textarea`
    margin-top : 30px;
    width : 100%;
    height : 450px;
`
const ButtonWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
`;
const NewPostBtn = styled.button`
    right : 0px;
    width : 100px; height : 30px;
    border : none; border-radius : 5px;
    font-size : 15px; font-weight : bold;
    cursor : pointer;
    background-color : black;
    color : white;
    &:hover {
        background-color : gray;
    }
`

function BoardModCom({onSubmit, onChange, data}){
    return (
        <>
            <StyleContentBlock>
                <StyleContentWrap>
                    <ProductTitle>
                        게 시 글 수 정
                    </ProductTitle>
                    <ContentWrap>
                        {
                            data && (
                                <>
                                    <form onSubmit={onSubmit}>
                                        <div className="post_title">
                                        <PostTitle value={data.title} name="title" onChange={onChange}></PostTitle>
                                    </div>
                                    <div className="post_content">
                                        <PostContent value={data.content} name="content" onChange={onChange}></PostContent>
                                    </div>
                                            <ButtonWrap>
                                        <NewPostBtn>완료</NewPostBtn>
                                    </ButtonWrap>
                                    </form>
                                </>
                            )
                        }
                        
                        
                    </ContentWrap>
                </StyleContentWrap>
            </StyleContentBlock>
        </>
    )
}

export default BoardModCom;