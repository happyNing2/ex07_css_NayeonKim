import styled from "styled-components";
import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent";

const ContentDiv = styled.div`
    width : 80%;
    margin : auto;
`
const PostTable = styled.table`
    margin : auto;
    width : 100%;
    border-collapse : collapse;
    border-top : 2px solid lightgray;
    border-bottom : 2px solid lightgray;
`

const PostThTr = styled.tr`
    border-bottom : 1px solid lightgray;
`
const PostInfoTr = styled.tr`
    border-bottom : 1px solid lightgray;
    height : 30px;
`

const PostTitle = styled.th`
    height : 60px;
    text-align : left;
    font-size : 28px;
    padding-left : 30px;
    padding-right : 30px;
`
const PostInfo = styled.td`
    color : gray;
    font-size : 10px;
    padding-left : 30px;
    padding-right : 30px;
`
const PostContent = styled.td`
    padding-left : 30px;
    padding-right : 30px;
    padding-top : 30px;
    padding-bottom : 30px;
    height : 300px;
    vertical-align : top;
`
const ButtonWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
`;
const ModifyPostBtn = styled.button`
    right : 0px;
`
const formatDate = (dateString) => {
    if (!dateString) return "";
    return dateString.replace("T", " ").substring(0, 16);
};

function BoardOneCom({data, isLoggedIn}){

    return (
        <>
            <StyleContentBlock>
                <StyleContentWrap>
                    <ContentDiv>
                        <PostTable>
                            <thead>
                                <PostThTr>
                                    <PostTitle colSpan={4}>
                                        { data && data.title}
                                    </PostTitle>
                                </PostThTr>
                            </thead>
                            <tbody>
                                <PostInfoTr>
                                    <PostInfo width={430}>
                                        글쓴이 { data && data.memberUserName}
                                    </PostInfo>
                                    <PostInfo>
                                        조회수<br></br> { data && data.postCount }
                                    </PostInfo>
                                    <PostInfo>
                                        작성일<br></br>{ data && formatDate(data.createAt)}
                                    </PostInfo>
                                    <PostInfo>
                                        수정일<br></br>{ data && formatDate(data.updateTime)}
                                    </PostInfo>
                                </PostInfoTr>
                                <PostInfoTr>
                                    <PostContent colSpan={4}>
                                        {data && data.content}
                                    </PostContent>
                                </PostInfoTr>
                            </tbody>
                        </PostTable>
                        {isLoggedIn
                            ? <>
                                <ButtonWrap>
                                    {/* onClick={ () => navigate("/board/post")} */}
                                    <ModifyPostBtn>글 수정하기</ModifyPostBtn>
                                </ButtonWrap>
                                
                            </>
                            : <></>
                        }
                    </ContentDiv>
                    
                </StyleContentWrap>
            </StyleContentBlock>
        </>
    )
}
export default BoardOneCom;