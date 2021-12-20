import React from "react";
import styled from "styled-components";
import { Button } from "../ui/style";

const HeaderLeftSideStyled = styled.div`
  margin-right: 65px;
  padding-top: 70px;
  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 52px;
    letter-spacing: -0.15px;
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
    margin-top: 24px;
    margin-bottom: 32px;
  }
`;

function HeaderLeftSide() {
  return (
    <HeaderLeftSideStyled>
      <h1>A Simple Bookmark Manager</h1>
      <p>
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </p>
      <Button mr16 bgcblue fs14 pad24 borblue>
        Get it on Chrome
      </Button>
      <Button fs14 pad24>
        Get it on Firefox
      </Button>
    </HeaderLeftSideStyled>
  );
}

export default HeaderLeftSide;
