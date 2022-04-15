import React from "react";

import { Container } from "./style";

import Key from "../Key";

export default function Keyboard() {
  const keys = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
  ];

  return (
    <Container>
      <div>
        {keys.map((key) =>
          key === "DEL" ? (
            <Key color={"blue"} key={key} id={key} />
          ) : (
            <Key color={"white"} key={key} id={key} />
          )
        )}
      </div>
      <div>
        <Key color={"blue"} id={"RESET"} />
        <Key color={"red"} id={"="} />
      </div>
    </Container>
  );
}
