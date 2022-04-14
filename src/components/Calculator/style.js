import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  height: 80%;
  margin: 0 auto;
  padding-top: 50px;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    color: ${(props) => props.theme.text.white};
  }
`;
