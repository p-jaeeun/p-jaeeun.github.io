import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Element>
          <Logo>p.jaeeun</Logo>
          <Navigation />
        </Element>
      </HeaderWrapper>
    );
  }
}

export default Header;

class Navigation extends Component {
  render() {
    return (
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
      </Nav>
    );
  }
}

// header

const HeaderWrapper = styled.header`
  width: 100%;
  height: 50px;
`;

const Element = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
`;

const Logo = styled.div`
  width: 100px;
  height: 50px;
  margin: 15px 0 0 20px;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  color: rgb(101, 101, 101);
`;

// navigation

const Nav = styled.li`
  width: 300px;
  height: 50px;
  display: flex;
  margin-left: 65%;
  list-style: none;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  margin: 15px;
  hegiht: 50px;
  font-size: 1.2rem;
  font-weight: 400;
  color: rgb(101, 101, 101);
  &:hover {
    background-color: #000;
    background-size: 100px;
    color: #fff;
  }
`;
