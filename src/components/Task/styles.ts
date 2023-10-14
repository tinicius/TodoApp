import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 20px);
  height: 40px;

  margin-left: 10px;
  margin-right: 10px;

  background-color: grey;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    /* margin-right: 10px; */
  }
`;

export const Text = styled.span`
  margin-left: 10px;
  color: white;
`;

export const IconButton = styled.button`
  width: 20px;
  height: 20px;

  margin-right: 10px;

  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
