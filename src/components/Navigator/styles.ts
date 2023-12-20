import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: black;
  color: white;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Text = styled.p`
  margin-left: 10px;
`;

export const RightIcon = styled.div`
  margin-right: 10px;
  height: 40px;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

`;

export const BackIconAndTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-left: 10px;
`;
