import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
// import { HamburgerMenu } from "react-Hamburger-menu";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo to="/">p.jaeeun</Logo>
        <Nav>
          <NavUl>
            <NavList>
              <Menu exact to="/">
                Home
              </Menu>
            </NavList>
            <NavList>
              <Menu to="/about">About</Menu>
            </NavList>
            <NavList>
              <Menu to="/projects">Projects</Menu>
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
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  padding: 15px 0 0 100px;
  align-items: center;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  color: #bebebe;
  &:hover {
    color: #000;
    transition: 0.2s;
  }
  @media all and (min-width: 1000px) and (max-width: 1330px) {
    padding-left: 50px;
  }
  @media all and (min-width: 768px) and (max-width: 999px) {
    padding-left: 30px;
    font-size: 1.2rem;
  }
  @media all and (max-width: 768px) {
    padding: 20px 0 0 30px;
    font-size: 1.1rem;
  }
`;

// navigation

const Nav = styled.nav`
  width: 400px;
  list-style: none;
  padding-right: 100px;
  @media all and (min-width: 1000px) and (max-width: 1330px) {
    padding-right: 90px;
    width: 300px;
  }
  @media all and (min-width: 768px) and (max-width: 999px) {
    padding-right: 20px;
    width: 300px;
  }
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const NavList = styled.li`
  height: 50px;
  margin-top: 15px;
`;

const activeClassName = "selected";

const Menu = styled(NavLink).attrs({ activeClassName })`
  width: 60px;
  padding: 20px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  color: #bebebe;
  &:hover {
    color: #000;
    transition: 0.2s;
  }
  &.${activeClassName} {
    color: #fff;
    background-color: #000;
  }
`;
