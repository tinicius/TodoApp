import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center;

    height: 100%;
  width: 100%; */

  gap: 10px;
`;

export const Footer = styled.footer`
  align-self: flex-end;
  justify-self: end;

  width: calc(100% - 20px);
  margin-left: 10px;
  margin-right: 10px;
`;
