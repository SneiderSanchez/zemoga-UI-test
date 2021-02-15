import React from "react";
import { DescriptionCard, Quote, DescriptionText, CrossIcon } from "./styles";

const ProductDescription = () => {
  return (
    <DescriptionCard>
      <Quote>
        <p>Speak out. Be heard.</p>
        <strong>Be counted</strong>
      </Quote>
      <DescriptionText>
        Rule of Thumb is a crowd sourced court of public opinion where anyone
        and everyone can speak out and speak freely. It’s easy: You share your
        opinion, we analyze and put the data in a public report.
      </DescriptionText>
      <CrossIcon />
    </DescriptionCard>
  );
};

export default ProductDescription;
