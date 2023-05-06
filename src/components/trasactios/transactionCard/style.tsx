import styled from "styled-components";

export const Container = styled.li`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #2cc1a2;
    font-weight: bold;
    font-size: 1.2rem;
    width: 30%;
    text-align: center;
  }
  .first {
    text-align: start;
  }

  .cashOut {
    color: #c12c2c;
    text-align: end;
  }
  .cashIn {
    color: #2cc1a2;
    text-align: end;
  }
`;
