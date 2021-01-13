import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <LogoLink to="/">p.jaeeun</LogoLink>
        <Nav>
          <NavUl>
            <NavList>
              <StyledLink to="/">Home</StyledLink>
            </NavList>
            <NavList>
              <StyledLink to="/about">About</StyledLink>
            </NavList>
            <NavList>
              <StyledLink to="/projects">Projects</StyledLink>
            </NavList>
          </NavUl>
        </Nav>
      </HeaderWrapper>
    );
  }
}

export default Header;

// header

const HeaderWrapper = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LogoLink = styled(Link)`
  padding: 15px 0 0 100px;
  align-items: center;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  color: rgb(101, 101, 101);
`;

// navigation

const Nav = styled.nav`
  list-style: none;
  padding-right: 200px;
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const NavList = styled.li`
  padding-left: 50px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  color: rgb(101, 101, 101);
  &:hover {
    color: rgb(255, 200, 0);
  }
`;
