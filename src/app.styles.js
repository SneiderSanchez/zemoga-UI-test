import styled from "styled-components";
import { device } from "./utils";

export const FooterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  max-width: 1100px;
  margin-bottom: 50px;
  @media only screen and ${device.sm} {
    max-width: 400px;
    margin-bottom: 40px;
  }

  @media only screen and ${device.md} {
    max-width: 800px;
  }
`;
