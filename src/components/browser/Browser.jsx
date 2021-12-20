import React from "react";
import styled from "styled-components";
import { Container } from "../ui/style";
import BrowserTypes from "./BrowserTypes";

const BrowserStyled = styled.div`
  margin-top: 180px;

  

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 52px;
    text-align: center;
    letter-spacing: -0.1px;
    color: #242a45;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #242a45;
    mix-blend-mode: normal;
    opacity: 0.5;

    width: 540px;
    margin: 0 auto;
  }
`;

function Browser() {
  return (
    <BrowserStyled>
      <Container>
        <h1>Download the extension</h1>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
        <BrowserTypes/>
      </Container>
    </BrowserStyled>
  );
}

export default Browser;
