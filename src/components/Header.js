import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo>p.jaeeun</Logo>
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

const Logo = styled.div`
  height: 50px;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  color: rgb(101, 101, 101);
`;

// navigation

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

const NavUl = styled.ul``;

const NavList = styled.li`
  &:hover {
    color: #fff;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  color: rgb(101, 101, 101);
`;
