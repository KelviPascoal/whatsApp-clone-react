import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--footer-chat);
  height: 74px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  input {
    background-color: --footer-input;
    height: 42px;
    width: 100%;
    border: 0;
    border-radius: 40px;
    
    font-size: 16px;
    font-weight: 300;
    padding: 0 18px;
  }

  button {
    background-color: transparent;
    border: 0;
    font-size: 22px;
    margin: 0 12px;
    color: #828689;
  }
`;
