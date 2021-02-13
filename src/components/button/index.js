import React from "react";
import { string, node, func } from "prop-types";

import { ButtonContainer } from "./styles";

const Button = ({ className, children, handleClick }) => {
  return (
    <ButtonContainer className={className} onClick={handleClick}>
      {children}
    </ButtonContainer>
  );
};

Button.propTypes = {
  children: node,
  handleClick: func.isRequired,
  className: string.isRequired,
};

Button.defaultProps = {
  children: "",
};

export default Button;
