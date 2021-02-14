import React from "react";
import { HeaderLogo, HeaderContainer, NavHeader, NavItem } from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo to="/">Rule of Thumb.</HeaderLogo>
      <NavHeader>
        <NavItem>
          <Link to="/pastTrials"> Past Trials</Link>
        </NavItem>
        <NavItem>
          <Link to="/howItWorks"> How It Works</Link>
        </NavItem>
        <NavItem>
          <Link to="/login"> Log In / Sign Up</Link>
        </NavItem>
        <NavItem>
          <Link to="/search">
            <img src="./search.svg" alt="search" />
          </Link>
        </NavItem>
      </NavHeader>
    </HeaderContainer>
  );
};

export default Header;
