import React from "react";
import styled from "styled-components";

import facebookIcon from "../../assets/icon-facebook.svg";
import twitterIcon from "../../assets/icon-twitter.svg";

const SocialStyled = styled.div`
  a {
    &:hover {
      fill: #fa5959;
    }
  }
`;

function FooterSocialMediaIcons() {
  return (
    <SocialStyled>
      <a href="#">
        <img src={facebookIcon} style={{ margin: "0 48px 0 0" }} alt="" />
      </a>
      <a href="#">
        <img src={twitterIcon} alt="" />
      </a>
    </SocialStyled>
  );
}

export default FooterSocialMediaIcons;
