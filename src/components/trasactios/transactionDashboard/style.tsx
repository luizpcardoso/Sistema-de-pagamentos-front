import styled from "styled-components";

export const Container = styled.div`
  height: 80%;
  width: 80%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  .dashboardList-header {
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px 20px 10px 20px;
    font-weight: bold;
    font-size: 1.5rem;
    color: #2cc1a2;

    p {
      width: 30%;
      text-align: center;
    }
    .first {
      text-align: start;
    }
    .end {
      text-align: end;
    }
  }
  ul {
    height: 80%;
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px 0 20px;
    overflow-x: hidden;
  }

  footer {
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 10px 20px 10px 20px;
    background-color: #2cc1a2;

    button {
      border: none;
      background-color: #ffffff;
      color: #2cc1a2;
      width: 30%;
      height: 80%;
      max-height: 50px;
    }
  }
`;
