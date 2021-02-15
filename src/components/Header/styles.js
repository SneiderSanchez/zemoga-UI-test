import styled from "styled-components";
import { device } from "../../utils";
import { Link } from "react-router-dom";
import { SearchSvg } from "../Icons";

export const HeaderContainer = styled.nav`
  display: flex;

  align-items: center;
  height: 140px;
  background: linear-gradient(
    rgba(${({ theme }) => theme.lightBackground}, 0.4),
    rgba(0, 0, 0, 0)
  );
  color: ${({ theme }) => theme.text};
  padding: 0 8%;
  @media only screen and ${device.sm} {
    height: 100px;
  }
`;

export const HeaderLogo = styled(Link)`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  justify-content: flex-start;
  font-size: 2.5em;
  font-weight: 800;
  @media only screen and ${device.sm}, only screen and ${device.md} {
    width: 30%;
    font-size: 2em;
  }
`;

export const NavHeader = styled.ul`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  flex: 1;
  text-align: center;
`;

export const NavItem = styled.li`
  font-size: 1.3em;
  margin: 0 2%;
  opacity: 0.9;
  font-weight: 300;
  a {
    display: flex;
    align-items: center;
    img {
      height: 1em;
      width: 1em;
    }
  }
`;

export const SearchIcon = styled(SearchSvg)`
  height: 1em;
  width: 1em;
  fill: ${({ theme }) => theme.text};
`;
