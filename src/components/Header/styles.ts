import styled from "styled-components";

export const Container = styled.header`
  background-color: #2a2f32;
  border-left: #ffffff18 solid 1px ;
  padding: 10px 16px;
  width: 100%;
  height: 59px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    button {
      height: 40px;
      width: 40px;
      font-size: 22px;
      border: 0;
      background-color: transparent;
      color: #b1b3b5;
      margin-left: 8px;
    }
  }
`;
