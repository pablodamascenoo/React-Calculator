import styled from "styled-components";

export const Container = styled.button`
  border-radius: 5px;
  border: none;
  color: ${(props) => {
    if (props.theme.title === "purple" && props.color === "red")
      return props.theme.text.secAlt;
    return props.color === "white"
      ? props.theme.text.alt
      : props.theme.text.white;
  }};
  font-size: ${(props) => (props.color === "white" ? "20px" : "15px")};
  font-weight: 700;
  height: 40px;
  font-family: "League Spartan", sans-serif;
  background-color: ${(props) => {
    if (props.color === "blue") return props.theme.keys.secondaryKeys;
    else if (props.color === "white") return props.theme.keys.mainKeys;
    else if (props.color === "red") return props.theme.keys.deleteKey;
  }};
  box-shadow: 0 -5px inset ${(props) => {
      if (props.color === "blue") return props.theme.keys.shadowSecondaryKeys;
      else if (props.color === "white") return props.theme.keys.shadowMainKeys;
      else if (props.color === "red") return props.theme.keys.shadowDeleteKey;
    }};
  cursor: pointer;
`;
