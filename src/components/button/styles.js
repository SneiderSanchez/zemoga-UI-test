import styled from "styled-components";

export const ButtonContainer = styled.button`
  border-width: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  /*   display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  // Variants
  &.variant-bordered {
    background: ${({ color }) => color};
  }
  &.variant-default {
    background: ${({ theme }) => theme.background};
  } */
`;
