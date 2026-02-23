import styled from "styled-components";
import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent";
import { ProductTitle } from "./common/StyleProduct";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const PostListTable = styled.table`
    margin :auto;
    width : 100%;
    border-collapse : collapse;
`
const PostListThTr = styled.tr`
    height : 40px;
    text-align : center;
    border-top : 1px solid black;
    border-bottom : 1px solid black;
`
const PostListTbTr = styled.tr`
    height : 35px;
    text-align : center;
    border-top : 1px solid lightgray;
    border-bottom : 1px solid lightgray;
    color : gray;
`
const ContentDiv = styled.div`
    width : 80%;
    margin : auto;
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

const formatDate = (dateString) => {
    if (!dateString) return "";
    return dateString.replace("T", " ").substring(0, 16);
};

function BoardCom({postList}){
    const {username, isLoggedIn, role} = useSelector(state => {
        return state.auth;
        }    
    )
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // console.log("postCom postlist : ", postList);
    return (
        <>
            <StyleContentBlock>
                <StyleContentWrap>
                    <ProductTitle>
                        게 시 글
                    </ProductTitle>
                    <ContentDiv>
                        <PostListTable>
                            <thead>
                                <PostListThTr>
                                    <th>#</th>
                                    <th width="60%">제 목</th>
                                    <th>작성일</th>
                                    <th>수정일</th>
                                </PostListThTr>
                            </thead>
                            <tbody>
                                {
                                    postList && postList.map( d => 
                                        <PostListTbTr id={d.number}>
                                            <td>{d.number}</td>
                                            <td><Link to={"/board/" + d.number}>{d.title}</Link></td>
                                            <td>{formatDate(d.createAt)}</td>
                                            <td>{formatDate(d.updateTime)}</td>
                                        </PostListTbTr>
                                    )
                                }
                            </tbody>
                        </PostListTable>
                        {isLoggedIn
                            ? <>
                                <ButtonWrap>
                                    <NewPostBtn onClick={ () => navigate("/board/post")}>글 작성하기</NewPostBtn>
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
export default BoardCom;