import React from "react";
import { HeaderLogo, HeaderContainer, NavHeader, NavItem } from "./styles";
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>Rule of Thumb.</HeaderLogo>
      <NavHeader>
        <NavItem> Past Trials</NavItem>
        <NavItem> How It Works</NavItem>
        <NavItem> Log In / Sign Up</NavItem>
        <NavItem> SearchIcon</NavItem>
      </NavHeader>
    </HeaderContainer>
  );
};

export default Header;
