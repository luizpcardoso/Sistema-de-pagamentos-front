import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: 1;
  background-color: #1a1a1a90;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;

  @keyframes slidein {
    from {
      margin-bottom: 100%;
      width: 300%;
    }

    to {
      margin-bottom: 0%;
      width: 100%;
    }
  }

  section {
    width: 100%;
    height: 50vh;
    background-color: #68e0d1;
    max-width: 500px;
    flex-direction: column;
    box-sizing: border-box;
    padding-top: 20px;
    border-radius: 0;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    color: #ffffff;
    font-size: 3rem;
    font-weight: bold;
  }

  form {
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-top: 20px;
  }

  .buttonClose {
    color: #ffffff;
    position: absolute;
    font-size: 1.5rem;
    top: 10px;
    right: 10px;
    padding: 5px 10px;
  }
  .buttonClose:hover {
    cursor: pointer;
    color: #787878;
  }

  .inputs-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 50%;
    gap: 10px;

    input {
      opacity: 0.9;
    }
    input:hover {
      opacity: 1;
    }
  }
  span {
    color: #ffffff;
  }

  .button-content {
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    padding-bottom: 20px;
    gap: 10px;
    color: #ffffff;
  }
`;
