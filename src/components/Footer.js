import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? (
        <FooterWrapper isHome>
          <FooterText>© 2020 | Jaeeun All rights reserved</FooterText>
        </FooterWrapper>
      ) : (
        <FooterWrapper>
          <FooterText>© 2020 | Jaeeun All rights reserved</FooterText>
        </FooterWrapper>
      )}
    </>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  width: 100%;
  height: 40px;
  position: fixed;
  overflow: hidden;
  bottom: 0;
  background-color: ${(props) => (props.isHome ? "transparent" : "#fff")};

  @media (max-width: 768px) {
    border-top: ${(props) => (props.isHome ? null : "solid 1px #f3f3f3")};
  }
`;

const FooterText = styled.div`
  width: 100%;
  height: 40px;
  margin: 0 auto;
  padding: 10px 0;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 350;
`;
