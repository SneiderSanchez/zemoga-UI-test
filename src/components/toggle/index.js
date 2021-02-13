import React from "react";
import { func, string } from "prop-types";
import { ToggleContainer } from "./styles";

export const Toggle = ({ theme, toggleTheme }) => {
  const isLightTheme = theme === "light";
  return (
    <ToggleContainer onClick={toggleTheme} isLightTheme={isLightTheme}>
      <p>🌝</p>
      <p>🌚</p>
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
