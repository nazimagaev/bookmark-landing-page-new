import React from "react";
import styled from "styled-components";
import { navLinks } from "../../constant";
import { Button } from "../ui/style";

const NavbarLinksStyled = styled.div`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 17px;
    text-align: right;
    letter-spacing: 1.5px;
    color: #242a45;
    text-transform: uppercase;

    margin-right: 45px;

    &:hover {
      color: #fa5959;
    }
  }
`;

function NavbarLinks() {
  return (
    <NavbarLinksStyled>
      <ul>
        {navLinks.map((link) => (
          <li>
            <a href="#">{link.title}</a>
          </li>
        ))}
        <Button>Login</Button>
      </ul>
    </NavbarLinksStyled>
  );
}

export default NavbarLinks;
