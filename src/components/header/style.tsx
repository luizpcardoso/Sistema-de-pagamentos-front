import styled from "styled-components";

export const Container = styled.header`
  height: 10vh;
  width: 100vw;
  background-color: #2cc1a2;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 0 20px 0 20px;

  .header-user {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    gap: 20px;

    img {
      height: 80%;
      border-radius: 100%;
    }
    h2 {
      color: #ffffff;
      font-weight: bold;
      font-size: 2rem;
    }
    .logOutIcon {
      color: #ffffff;
      font-size: 2rem;
    }
    .logOutIcon:hover {
      color: #2b6055;
      cursor: pointer;
      transition: 0.3s;
    }
  }
  .header-balance {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;

    span {
      font-size: 2rem;
      font-weight: bold;
      color: #ffffff;
    }
    .span-balance {
      font-size: 1rem;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .addIcon {
      font-size: 2rem;
      color: #ffffff;
      border-radius: 100%;
      background-color: #2b6055;
      height: 1.5rem;
      width: 1.5rem;
      margin-left: 10px;
    }
    .addIcon:hover {
      background-color: #ffffff;
      color: #2b6055;
      transition: 0.3s;
      cursor: pointer;
    }
  }
`;
