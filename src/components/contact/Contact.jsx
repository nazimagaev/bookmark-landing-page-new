import React from "react";
import styled from "styled-components";
import { Button, Container } from "../ui/style";

const ContactStyled = styled.div`
  margin-top: 150px;
  padding-top: 58px;
  padding-bottom: 74px;
  padding: 58px 515px 74px 515px;
  background: #5267df;
`;
const ContactItemsStyled = styled.div`
  text-align: center;

  h1 {
    margin-bottom: 36px;
    margin-top: 24px;

    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    letter-spacing: -0.1px;
    color: #ffffff;
  }

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 5px;
    color: #ffffff;
  }

  input {
    background: #ffffff;
    border-radius: 5px;
    border: none;
    width: 300px;
    height: 48px;

    margin-right: 16px;
    padding: 10px 20px;

    &::placeholder {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 28px;
      letter-spacing: 0.25px;
      color: rgba(36, 42, 69, 0.250109);
    }
  }
`;

function Contact() {
  return (
    <ContactStyled>
      <Container>
        <ContactItemsStyled>
          <h2>35,000+ ALREADY JOINED</h2>
          <h1>Stay up-to-date with what we’re doing</h1>
          <input type="text" placeholder="Enter your email address" />
          <Button style={{ padding: "16px 24px" }}>Contact Us</Button>
        </ContactItemsStyled>
      </Container>
    </ContactStyled>
  );
}

export default Contact;
