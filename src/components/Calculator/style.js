import styled from "styled-components";

export const Container = styled.div`
  max-width: 375px;
  width: 80%;
  height: 80%;
  margin: 0 auto;
  padding-top: 50px;
  color: ${(props) =>
    props.theme.title === "dark"
      ? props.theme.text.white
      : props.theme.text.alt};
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    position: relative;
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 20px;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    div > p {
      display: flex;
      gap: 20px;
    }
  }

  & > div > p {
    font-weight: 700;
    margin-top: 20px;
  }

  input[type="range"] {
    width: 80px;
    -webkit-appearance: none;
    background-color: ${(props) => props.theme.backgrounds.keypad};
    height: 20px;
    border-radius: 20px;
    cursor: pointer;

    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      background-color: ${(props) => props.theme.keys.deleteKey};
      border-radius: 50%;
      height: 15px;
      width: 15px;
    }

    ::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      background-color: transparent;
      padding: 0 5px;
    }
  }
`;
