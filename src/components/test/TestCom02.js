import styled from "styled-components"
const colorList = ["red", "skyblue"];
const StyledDiv01 = styled.div`
    font-size : 30px;
    background-color : beige;
`; //div에 대해 설정하겠다

const StyledH1 = styled.h1`
    background-color : ${colorList[0]};
    color : ${colorList[1]}
`;

function Test02() {
    return(
        <>
            <StyledDiv01>Test02</StyledDiv01>
            <StyledH1>Test02</StyledH1>
        </>
    )
}
export default Test02;