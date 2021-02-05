import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBurger = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 1.5rem;
    height: 2px;
    background-color: ${({ open }) => (open ? "#fff" : "#bebebe")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
const NavUl = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (min-width: 769px) {
    display: none;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #000;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li a {
      color: #fff;
      font-size: 1rem;
    }
  }
`;

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavUl open={open} onClick={() => setOpen(!open)}>
        <li>
          <Link exact to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </NavUl>
    </React.Fragment>
  );
};

export default BurgerMenu;
