import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  // Variants
  &.variant-blured {
    background: ${({ theme }) => theme.blured};
    backdrop-filter: blur(50px);
  }
  &.variant-default {
    background: ${({ theme }) => theme.background};
  }
  &.variant-image {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${({ imageUrl }) => imageUrl});
  }
`;

/* const complexVariantStyle = {
  person:
    "background-repeat: no-repeat; background-size: cover;background-image: url(./",
};

  ${({ variant }) => {
    if (variant.includes("person")) {
      const person = variant.split("-")[1];
      if (person) {
        return `${complexVariantStyle["person"]}${person}.png);`;
      }
    }
  }}; 
*/
