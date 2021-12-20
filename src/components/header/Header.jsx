import React from "react";
import styled from "styled-components";
import { Container } from "../ui/style";
import HeaderLeftSide from "./HeaderLeftSide";
import heroImg from "../../assets/illustration-hero.svg";


const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 110px;

  img {
    margin-right: -110px;
  }
`;

function Header() {
  return (
    <Container>
      <HeaderStyled>
        <HeaderLeftSide />
        <img src={heroImg} alt="" />
      </HeaderStyled>
    </Container>
  );
}

export default Header;
