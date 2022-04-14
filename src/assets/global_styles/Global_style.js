import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap');

:root{
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
    background-color: ${(props) => props.theme.backgrounds.main};
}

`;

export default GlobalStyle;
