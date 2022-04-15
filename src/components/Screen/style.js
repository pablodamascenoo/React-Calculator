import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.backgrounds.screen};
`;
