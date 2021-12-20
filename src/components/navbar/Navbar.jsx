import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo-bookmark.svg";
import { Container } from "../ui/style";
import NavbarLinks from "./NavbarLinks";

const NavbarStyled = styled.div`
  margin-top: 50px;

  display: flex;
  justify-content: space-between;

  img {
    width: 149px;
    height: 25px;
  }
`;

function Navbar() {
  return (
    <Container>
      <NavbarStyled>
        <img src={logo} alt="logo" />
        <NavbarLinks />
      </NavbarStyled>
    </Container>
  );
}

export default Navbar;
