import React from "react";
import styled from "styled-components";

const TabButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(73, 93, 207, 0.20012);
  width: 730px;
  margin: 0 auto;

  button {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 0.533333px;
    color: #242a45;

    cursor: pointer;
    background-color: transparent;
    border: none;
    border-bottom: 4px solid #fa5959;
    padding-bottom: 32px;

    &:not(:last-child) {
      margin-right: 90px;
    }

    &:hover {
      color: #fa5959;
    }
  }
`;

function TabButton({ setContent }) {
  return (
    <TabButtonStyled>
      <button onClick={() => setContent("simple")}>Simple Bookmarking</button>
      <button onClick={() => setContent("speedy")}>Speedy Searching</button>
      <button onClick={() => setContent("easy")}>Easy Sharing</button>
    </TabButtonStyled>
  );
}

export default TabButton;
