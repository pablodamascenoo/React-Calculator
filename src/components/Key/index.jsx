import React from "react";
import { useContext } from "react";

import ScreenContext from "../../contexts/ScreenContext";

import { Container } from "./style";

export default function Key({ id, color }) {
  const { screenText, SetScreenText } = useContext(ScreenContext);

  const operations = {
    "+": (x, y) => {
      return +x + +y;
    },
    "-": (x, y) => {
      return +x - +y;
    },
    x: (x, y) => {
      return +x * +y;
    },
    "/": (x, y) => {
      return +x / +y;
    },
  };

  function changeScreen(value) {
    switch (value) {
      case "RESET":
        SetScreenText("");
        break;
      case "DEL":
        console.log(screenText);
        SetScreenText(screenText.slice(0, screenText.length - 1));
        break;
      case "0":
        if (screenText.length !== 0) SetScreenText(screenText + value);
      case "/":
      case "x":
      case "+":
      case "-":
        if (
          screenText.length !== 0 &&
          !isNaN(parseInt(screenText[screenText.length - 1])) &&
          !screenText.match(/(\/|\x|\+|\-)/g)
        )
          SetScreenText(screenText + value);
        break;
      case ".":
        let aux = screenText.split(/(\/|\x|\+|\-)/);
        if (!screenText[screenText.length - 1].match(/(\/|\x|\+|\-)/g)) {
          if (!aux[aux.length - 1].match(/\./))
            SetScreenText(screenText + value);
        }
        break;
      case "=":
        aux = screenText.split(/(\/|\x|\+|\-)/);
        if (aux.length == 3)
          SetScreenText(operations[aux[1]](aux[0], aux[2]).toString());
        break;
      default:
        SetScreenText(screenText + value);
        break;
    }
  }

  return (
    <Container
      onClick={() => {
        changeScreen(id);
      }}
      color={color}
    >
      {id}
    </Container>
  );
}
