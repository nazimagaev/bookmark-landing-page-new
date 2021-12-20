import React from "react";
import styled from "styled-components";
import { navLinks } from "../../constant";

const FooterLinksStyled = styled.div`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin-left: 0;

    li {
      &:not(:last-child) {
        margin-right: 44px;
      }

      a {
        text-decoration: none;
        text-transform: uppercase;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 17px;
        text-align: right;
        letter-spacing: 1.5px;
        color: #ffffff;

        &:hover {
          color: #fa5959;
        }
      }
    }
  }
`;

function FooterLinks() {
  return (
    <FooterLinksStyled>
      <ul>
        {navLinks.map((link) => (
          <li>
            <a href="#">{link.title}</a>
          </li>
        ))}
      </ul>
    </FooterLinksStyled>
  );
}

export default FooterLinks;
