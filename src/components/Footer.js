import React from "react";
import styled from "styled-components";

const Footer = () => (
  <FooterWrapper>
    <FooterList>
      <FooterItem>
        <span> © 2020 | Jaeeun All rights reserved.</span>
      </FooterItem>
    </FooterList>
  </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.footer`
  width: 100%;
  height: 40px;
`;
const FooterList = styled.ul`
  width: 100%;
  margin: 0 auto;
  diplay: flex;
  flex-direction: row;
  justify-content: center;
`;

const FooterItem = styled.li`
  list-style: none;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 350;
`;
