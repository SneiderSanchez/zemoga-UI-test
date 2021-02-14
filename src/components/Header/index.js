import React from "react";
import { HeaderLogo, HeaderContainer, NavHeader, NavItem } from "./styles";
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>Rule of Thumb.</HeaderLogo>
      <NavHeader>
        <NavItem>
          <a href="pastTrials"> Past Trials</a>
        </NavItem>
        <NavItem>
          <a href="howItWorks"> How It Works</a>
        </NavItem>
        <NavItem>
          <a href="login"> Log In / Sign Up</a>
        </NavItem>
        <NavItem>
          <a href="search">
            <img src="./search.svg" alt="search"></img>
          </a>
        </NavItem>
      </NavHeader>
    </HeaderContainer>
  );
};

export default Header;
