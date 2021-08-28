import styled from "styled-components";

export const Container = styled.li`
  height: 72px;
  border-bottom: var(--divise-chat) solid 1px;

  display: flex;
  align-items: center;
`;

export const ContainerUlChatr = styled.ul`
  display: flex;
  width: 100%;
  padding: 0 15px;
`;

export const ChatInfo = styled.ul`
  width: 100%;
  padding-left: 13px;

  display: flex;

  .name-last-message {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 6px;

    strong {
      white-space: nowrap;
      font-size: 16px;
      font-weight: 300;
      margin-bottom: 6px;
    }

    p {
      max-width: 350px;
      font-size: 13px;
      font-weight: 300;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .hour {
    span {
      max-width: 370px;
      font-size: 12px;
      font-weight: 300;
    }
  }
`;
