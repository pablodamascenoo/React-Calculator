import Reset from "../assets/global_styles/Reset";
import Calculator from "./Calculator/index.jsx";
import GlobalStyle from "../assets/global_styles/Global_style";

import dark from "../theme/dark";

import React from "react";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <Reset />
        <GlobalStyle />
        <main data-theme="dark">
          <Calculator />
        </main>
      </ThemeProvider>
    </>
  );
}
