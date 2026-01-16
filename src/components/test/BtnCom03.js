import styled, {css} from "styled-components";

const StyledButton = styled.button`
    width : 300px; height : 50px;
    background-color : blue; color : white;
    border : none; border-radius : 5px;
    cursor : pointer;

    ${props => css`
        ${props.width && `width : ${props.width};`}
        ${props.background && 
            `background-color : rgba(${props.background[0]}, ${props.background[1]});`}
    `}
    
    &:hover {
        background-color : darkblue;
        ${
            props => props.background && css`
                background-color : rgba(${props.background[0]}, ${props.background[1] + 0.4})
            `
        }
    }
`;

export default StyledButton