import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    box-sizing: border-box;
    font-size: 32px;
    font-weight: 700;
    font-family: 'League Spartan', sans-serif;
}

body{
    width: 100%;
    height: 100vh;
}

main{
    height: 100vh;
    overflow-y: scroll;
    background-color: ${(props) => props.theme.backgrounds.main};
}

`;

export default GlobalStyle;
