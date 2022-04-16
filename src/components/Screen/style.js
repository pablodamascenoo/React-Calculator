import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 80px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.backgrounds.screen};
  display: flex;
  align-items: center;
  justify-content: end;

  & > p {
    font-size: 40px;
    padding-right: 15px;
  }
`;
