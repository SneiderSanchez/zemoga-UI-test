import styled from "styled-components";

export const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;
  font-size: 2em;
  p {
    margin: 0;
    height: auto;
    width: 2.5rem;
    transition: all 0.5s linear;

    // sun emoji
    &:first-child {
      transform: ${({ isLightTheme }) =>
        isLightTheme ? "translateY(0)" : "translateY(100px)"};
    }

    // moon emoji
    &:nth-child(2) {
      transform: ${({ isLightTheme }) =>
        isLightTheme ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;
