import styled from "styled-components";
import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent";
import { ProductTitle } from "./common/StyleProduct";
import { Link } from "react-router-dom";

const MemListTable = styled.table`
    margin : auto;
    width : 400px;
    border-collapse: collapse;

`;
const MemListTr = styled.tr`
    height : 50px;
    text-align : center;
    border-top : 1px solid black;
    border-bottom : 1px solid black;
    
`;

const PagenUl = styled.ul`
    margin : auto;
    text-align : center;
    display : flex;
    width : 400px;
    margin-top : 10px;
`
const PageLi = styled.li`
    margin : auto;
    text-align :center;
`

function ListCom({memberList}) {
    return (
        <>
            <StyleContentBlock>
                <StyleContentWrap>
                    <ProductTitle>
                        회 원 목 록
                    </ProductTitle>
                    <div>
                        <MemListTable>
                            <thead>
                                <MemListTr>
                                    <th>아이디</th>
                                    <th>비밀번호</th>
                                    <th>ROLE</th>
                                </MemListTr>
                            </thead>
                            <tbody>
                                {memberList && memberList['list'].map( d=> (
                                    <MemListTr id={d.id} >
                                        <td><Link to={"/memberinfo?id=" + d.id}>{d.username}</Link></td>
                                        {/* <td><Link to={"/memberinfo/" + d.id}>{d.username}</Link></td> */}
                                        <td>{d.password}</td>
                                        <td>{d.role}</td>
                                    </MemListTr>
                                )
                                )}
                            </tbody>
                        </MemListTable>
                        <PagenUl>
                            {memberList && 
                                Array.from(
                                    {length : memberList.totalPages},
                                    (_, idx) => (
                                        <PageLi key={idx+1}>
                                            <Link to={"?start=" + idx}>{idx + 1}</Link>
                                        </PageLi>
                                    )
                                )
                            }
                            {memberList &&
                                <PageLi>( {memberList['currentPage'] + 1} / {memberList['totalPages']} )</PageLi>
                            }
                            
                        </PagenUl>
                    </div>

                </StyleContentWrap>
            </StyleContentBlock>
        </>
    )
}
export default ListCom;