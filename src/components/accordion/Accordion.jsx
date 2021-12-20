import React from "react";
import styled from "styled-components";
import { Container } from "../ui/style";
import Questions from "./Questions";

const AccordionStyled = styled.div`
  margin-top: 150px;
  padding: 0 330px;


  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 52px;
    text-align: center;
    letter-spacing: -0.1px;
    color: #242a45;
    margin-bottom: 16px;
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
  }
`;

function Accordion() {
  return (
    <Container>
      <AccordionStyled>
        <h1>Frequently Asked Questions</h1>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
        <Questions />
      </AccordionStyled>
    </Container>
  );
}

export default Accordion;
