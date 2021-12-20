import React from "react";
import styled from "styled-components";
import { Container } from "../ui/style";

const FeatureStyled = styled.div`
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

    margin-top: 26px;
    max-width: 540px;
    margin: 0 auto;
  }
`;

function Feature() {
  return (
    <FeatureStyled>
      <Container>
        <h1>Features</h1>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </Container>
    </FeatureStyled>
  );
}

export default Feature;
