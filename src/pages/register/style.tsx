import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #a3ffff;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes opacity {
    from {
      opacity: 0.5;
    }

    to {
      opacity: 1;
    }
  }

  section {
    height: 50%;
    background-color: #68e0d1;
    width: 500px;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    padding-top: 20px;
    animation-name: opacity;
    animation-duration: 0.3s;
  }

  h1 {
    color: #ffffff;
    font-size: 3rem;
    font-weight: bold;
  }

  form {
    width: 90%;
    color: #ffffff;
    height: 80%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-top: 20px;

    .inputs-content {
      display: flex;
      flex-direction: column;
      height: 65%;
      gap: 10px;

      input {
        opacity: 0.9;
      }
      input:hover {
        opacity: 1;
      }
    }

    .button-content {
      height: 30%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      gap: 10px;

      button:hover {
        opacity: 0.8;
        transition: 0.5s;
        cursor: pointer;
      }
    }
    span:hover {
      cursor: pointer;
      font-weight: bold;
    }
  }
`;
