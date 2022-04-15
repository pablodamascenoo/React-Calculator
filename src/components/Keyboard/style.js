import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 15px;
  border-radius: 5px;
  height: fit-content;
  background-color: ${(props) => props.theme.backgrounds.keypad};

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 12px;
    padding: 15px;
  }

  & > div:last-of-type {
    padding-top: 0;
    grid-template-columns: 1fr 1fr;
  }
`;
