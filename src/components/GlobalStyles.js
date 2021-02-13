import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *:focus{
    outline: none;
  }
  * {
    padding:0;
    margin:0;

  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Lato', sans-serif;
    transition: all 0.50s linear;
  }
`;
