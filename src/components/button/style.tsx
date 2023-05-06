import styled from "styled-components";

interface StyledComponentProps {
  width: string;
  backgroundColor: string;
  height: string;
  type?: any;
  fontColor: string;
}

export const ButtonContainer = styled.button<StyledComponentProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};

  border: none;
  font-size: 1.5rem;
  box-sizing: border-box;
  font-weight: bold;
`;
