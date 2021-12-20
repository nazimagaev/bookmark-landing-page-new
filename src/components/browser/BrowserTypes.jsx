import React from "react";
import styled from "styled-components";
import { Button } from "../ui/style";

import chromeImg from "../../assets/logo-chrome.svg";
import { browserItems } from "../../constant";

const BrowserTypesStyled = styled.div`
  margin-top: 50px;

  display: flex;
  justify-content: space-between;

  padding-left: 100px;
  padding-right: 100px;

  /* 
  &:not(:first-child) {
    margin-bottom: -50px;
  } */
`;
const BrowserCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px -5px rgba(73, 93, 207, 0.20012);
  border-radius: 15px;
  width: 280px;
  text-align: center;
  padding: 49px 20px 24px 20px;

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.25px;
    color: #242a45;

    margin-top: 32px;
    margin-bottom: 6px;
  }

  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 28px;
    text-align: center;
    color: #242a45;
    mix-blend-mode: normal;
    opacity: 0.5;

    margin-bottom: 60px;
  }
`;

function BrowserTypes() {
  return (
    <BrowserTypesStyled>
      {browserItems.map((item) => (
        <BrowserCard>
          <img src={item.img} alt="" />
          <h2>{item.title}</h2>
          <h3>{item.desc}</h3>
          <Button bortop borblue bgcblue>
            Add & Install Extension
          </Button>
        </BrowserCard>
      ))}
    </BrowserTypesStyled>
  );
}

export default BrowserTypes;
