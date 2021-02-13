import React from "react";
import { string, node } from "prop-types";

import { CardContainer } from "./styles";

const Card = ({ children, className }) => {
  return <CardContainer className={className}>{children}</CardContainer>;
};

Card.propTypes = {
  children: node.isRequired,
  className: string.isRequired,
};

export default Card;
