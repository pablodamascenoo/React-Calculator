import Reset from "../assets/global_styles/Reset";
import Calculator from "./Calculator";
import GlobalStyle from "../assets/global_styles/Global_style";

import dark from "../theme/dark";
import light from "../theme/light";
import purple from "../theme/purple";

import React from "react";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

export default function App() {
  const [theme, SetTheme] = useState(JSON.parse(localStorage.getItem("theme")));

  function changeTheme(value) {
    let themeChange = {};
    switch (value) {
      case "1":
        themeChange = { color: dark, id: value };
        break;
      case "2":
        themeChange = { color: light, id: value };
        break;
      case "3":
        themeChange = { color: purple, id: value };
        break;
    }
    localStorage.setItem("theme", JSON.stringify(themeChange));
    SetTheme({ ...themeChange });
  }

  return (
    <>
      <ThemeProvider
        theme={
          theme === null || Object.keys(theme).length === 0 ? dark : theme.color
        }
      >
        <Reset />
        <GlobalStyle />
        <main>
          <Calculator theme={theme} changeTheme={changeTheme} />
        </main>
      </ThemeProvider>
    </>
  );
}
