import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import Burger from "components/BurgerMenu/Burger";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo to="/">p.jaeeun</Logo>
        <Burger />
        <Nav>
          <Ul>
            <Li>
              <Menu exact to="/">
                Home
              </Menu>
            </Li>
            <Li>
              <Menu to="/about">About</Menu>
            </Li>
            <Li>
              <Menu to="/projects">Projects</Menu>
            </Li>
          </Ul>
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
  list-style: none;
  margin-right: 10rem;
  @media all and (min-width: 1000px) and (max-width: 1330px) {
    margin-right: 9rem;
  }
  @media all and (min-width: 768px) and (max-width: 999px) {
    margin: 0;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Ul = styled.ul`
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;

  /* @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: center;
    background-color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  } */
`;
const Li = styled.li``;

const activeClassName = "selected";

const Menu = styled(NavLink).attrs({ activeClassName })`
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
