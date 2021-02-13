import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  //align-items: center;
  justify-content: space-around;
  align-items: center;
  height: 140px;
  background: #00000014;
  // background: ${({ theme }) => theme.background};
  // box-shadow: 0px 15px 6px 0px rgba(0, 0, 0, 0.08);
  padding: 0 8%;
`;
export const HeaderLogo = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  font-size: 2.5em;
  font-weight: 800;
`;
export const NavHeader = styled.ul`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
`;

export const NavItem = styled.li`
  font-size: 1.3em;
  margin: 0 2%;
  opacity: 0.9;
`;
