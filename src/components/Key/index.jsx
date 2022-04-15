import React from "react";

import { Container } from "./style";

export default function Key({ id, color }) {
  return <Container color={color}>{id}</Container>;
}
