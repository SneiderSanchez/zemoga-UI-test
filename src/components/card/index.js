import React from "react";
import { string, node } from "prop-types";

import { CardContainer } from "./styles";

const Card = ({ children, variant, width, height, imageUrl }) => {
  return (
    <CardContainer
      className={`variant-${variant}`}
      imageUrl={imageUrl}
      width={width}
      height={height}
    >
      {children}
    </CardContainer>
  );
};

Card.propTypes = {
  children: node.isRequired,
  variant: string,
  height: string,
  width: string,
  imageUrl: string,
};

Card.defaultProps = {
  variant: "default",
  height: "auto",
  width: "auto",
  imageUrl: "./defaultAvatar.png",
};

export default Card;
