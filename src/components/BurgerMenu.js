import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BurgerMenu = (props) => {
  const { isMenuOpen } = props;
  return (
    <>
      {isMenuOpen ? (
        <div className="nav_wrap">
          <ul className="burgermenu-list">
            <li>
              <Menu exact to="/">
                Home
              </Menu>
            </li>
            <li>
              <Menu to="/about">About</Menu>
            </li>
            <li>
              <Menu to="/projects">Projects</Menu>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default BurgerMenu;

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
