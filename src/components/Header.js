import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import BurgerMenu from "components/Burger";

const Header = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? (
        <HeaderWrapper isHome>
          <Logo to="/">p.jaeeun</Logo>
          <BurgerMenu />
          <Nav>
            <NavUl>
              <NavItem>
                <Menu exact to="/">
                  Home
                </Menu>
              </NavItem>
              <NavItem>
                <Menu to="/about">About</Menu>
              </NavItem>
              <NavItem>
                <Menu to="/projects">Projects</Menu>
              </NavItem>
            </NavUl>
          </Nav>
        </HeaderWrapper>
      ) : (
        <HeaderWrapper>
          <Logo to="/">p.jaeeun</Logo>
          <BurgerMenu />
          <Nav>
            <NavUl>
              <NavItem>
                <Menu exact to="/">
                  Home
                </Menu>
              </NavItem>
              <NavItem>
                <Menu to="/about">About</Menu>
              </NavItem>
              <NavItem>
                <Menu to="/projects">Projects</Menu>
              </NavItem>
            </NavUl>
          </Nav>
        </HeaderWrapper>
      )}
    </>
  );
};

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
  border-bottom: ${(props) => (props.isHome ? null : "solid 1px #f3f3f3")};
  background-color: ${(props) => (props.isHome ? "transparent" : "#fff")};
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
    padding: 15px 0 0 30px;
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

const NavUl = styled.ul`
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const NavItem = styled.li``;

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
