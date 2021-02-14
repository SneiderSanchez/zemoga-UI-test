import React from "react";
import { func, string } from "prop-types";
import { ToggleWrapper, ToggleButton } from "./styles";

export const Toggle = ({ theme, toggleTheme }) => {
  const isLightTheme = theme === "light";
  return (
    <ToggleWrapper>
      <h5>
        Placing Toogle at the end just for demo purposes. It should be on the
        header but since it doesn't exist on the inital design, I decided to
        place it here, to make the design as accurate as posible.
      </h5>
      <ToggleButton onClick={toggleTheme} isLightTheme={isLightTheme}>
        <p>🌝</p>
        <p>🌚</p>
      </ToggleButton>
    </ToggleWrapper>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
