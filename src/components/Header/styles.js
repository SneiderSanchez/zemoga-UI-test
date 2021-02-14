import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-around;
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

export const HeaderLogo = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  font-size: 2.5em;
  font-weight: 800;
  @media only screen and ${device.sm}, only screen and ${device.md} {
    width: 30%;
    font-size: 2em;
  }
`;

export const NavHeader = styled.ul`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  @media only screen and ${device.sm}, only screen and ${device.md} {
    width: 70%;
  }
`;

export const NavItem = styled.li`
  font-size: 1.3em;
  margin: 0 2%;
  opacity: 0.9;
  font-weight: 300;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    img {
      height: 1em;
      width: 1em;
    }
  }
`;
