import React from "react";
import styled from "styled-components";
import { Container } from "../ui/style";
import FooterLinks from "./FooterLinks";
import logo from "../../assets/logo-bookmark-white.svg";
import FooterSocialMediaIcons from "./FooterSocialMediaIcons";

const FooterStyled = styled.div`
  background-color: #242a45;

  padding: 38px 0;
`;
const FooterItemsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Footer() {
  return (
    <FooterStyled>
      <Container>
        <FooterItemsStyled>
          <img src={logo} alt="" />
          <FooterLinks />
          <FooterSocialMediaIcons />
        </FooterItemsStyled>
      </Container>
    </FooterStyled>
  );
}

export default Footer;
