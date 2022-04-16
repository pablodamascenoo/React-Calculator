import React from "react";
import { useContext } from "react";

import { Container } from "./style";

import ScreenContext from "../../contexts/ScreenContext";

export default function Screen() {
  const { screenText } = useContext(ScreenContext);

  return (
    <Container>
      <p>{screenText}</p>
    </Container>
  );
}
