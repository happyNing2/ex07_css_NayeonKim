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
                                {memberList && memberList.map( d=> (
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
                    </div>

                </StyleContentWrap>
            </StyleContentBlock>
        </>
    )
}
export default ListCom;