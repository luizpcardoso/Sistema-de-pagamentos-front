import styled from "styled-components";

interface StyledComponentProps {
  width: string;
  backgroundColor: string;
  height: string;
  fontColor?: string;
}

export const Container = styled.div<StyledComponentProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.fontColor};

  input {
    width: 100%;
    height: 80%;
    box-sizing: border-box;
    border: none;
    background-color: ${(props) => props.backgroundColor};
  }
  input {
    border: none;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  label {
    height: 10%;
    font-weight: bold;
  }
`;
