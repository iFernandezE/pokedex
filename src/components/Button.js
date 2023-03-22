import styled from "styled-components";
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

// en este componente se esta usando Styledcomponents
const StyledLightButton = styled.button`
    color: white;
    font-size: 5rem;
    border-radius: 10px;
    height: 200px;
    background-color: #B01E68;
`;
const StyledDarkButton = styled.button`
    color: gray;
    font-size: 5rem;
    border-radius: 10px;
    height: 200px;
    background-color: #065577;
`;

function Button(props) {
    const data = useContext(ThemeContext);
    if (data.theme === 'light') {
        return (
            <StyledLightButton
                onClick={props.onClick}
            >
                {props.text}
            </StyledLightButton>
        )
    }
    else {
        return (
            <StyledDarkButton
                onClick={props.onClick}
            >
                {props.text}
            </StyledDarkButton>
        )
    }
}

export default Button;