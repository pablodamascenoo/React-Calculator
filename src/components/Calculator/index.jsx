import React from "react";

import Screen from "../Screen/Screen";
import Keyboard from "../Keyboard";

import { Container, TitleBox } from "./style";

export default function Calculator({ theme, changeTheme }) {
  return (
    <Container>
      <TitleBox>
        <h2>calc</h2>
        <div>
          <p>THEME</p>
          <div>
            <p>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </p>
            <input
              type="range"
              value={theme === null ? 1 : theme.id}
              onChange={(e) => changeTheme(e.target.value)}
              min={1}
              max={3}
            />
          </div>
        </div>
      </TitleBox>
      <Screen />
      <Keyboard />
    </Container>
  );
}
