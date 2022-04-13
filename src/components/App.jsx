import Reset from "../assets/global_styles/Reset";
import GlobalStyle from "../assets/global_styles/Global_style";

import React from "react";
export default function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <main data-theme="dark">
        <h1>Hello World!</h1>
      </main>
    </>
  );
}
