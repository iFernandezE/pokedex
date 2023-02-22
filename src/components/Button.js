import styled from "styled-components";

const StyledButton = styled.button`
    color: white;
    font-size: 5rem;
    border-radius: 10px;
    margin-top: 160px;
    margin-bottom: 160px;
`;

function Button(props){
    return(
        <StyledButton
            onClick={props.onClick}
        >
            {props.text}
        </StyledButton>
    )
}

export default Button;