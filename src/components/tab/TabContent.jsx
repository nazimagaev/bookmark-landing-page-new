import React from "react";
import styled from "styled-components";
import tab1 from "../../assets/illustration-features-tab-1.svg";
import { tabItems } from "../../constant";
import { Button } from "../ui/style";

const TabContentStyled = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 72px;
`;
const TabContentTextBoxStyled = styled.div`
  margin-left: 125px;
  padding-top: 55px;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 52px;
    letter-spacing: -0.1px;
    color: #242a45;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color: #242a45;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin-top: 16px;
    margin-bottom: 32px;
    width: 445px;
  }
`;

function TabContent({ content }) {
  console.log(content);
  return (
    <>
      {tabItems.map((item) => (
        <TabContentStyled>
          <img src={item[content].img} alt="" />
          <TabContentTextBoxStyled>
            <h1>{item[content].title}</h1>
            <p>{item[content].desc}</p>
            <Button style={{ padding: "15px 24px" }} bgcblue borblue>
              More info
            </Button>
          </TabContentTextBoxStyled>
        </TabContentStyled>
      ))}
    </>
  );
}

export default TabContent;
