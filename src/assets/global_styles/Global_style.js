import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --background-color: hsl(222, 26%, 31%);
    --secondary-background: hsl(223, 31%, 20%);
    --screen-background: hsl(224, 36%, 15%);

    --blue-keys: hsl(225, 21%, 49%)
    --blue-keys-shadow: hsl(224, 28%, 35%)
    --red-keys: hsl(6, 63%, 50%)
    --red-keys-shadow: hsl(6, 70%, 34%)
    --white-keys: hsl(30, 25%, 89%)
    --white-keys-shadow: hsl(28, 16%, 65%)
}

[data-theme='light']{
    --background-color: hsl(0, 0%, 90%)
    --secondary-background: hsl(0, 5%, 81%)
    --screen-background: hsl(0, 0%, 93%)
}

body{
    width: 100%;
    height: 100vh;
}

main{
    height: 100vh;
    background-color: var(--background-color);
}

`;

export default GlobalStyle;
