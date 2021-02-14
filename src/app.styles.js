import styled from "styled-components";
import { device } from "./utils/breakpoints";

export const MainContent = styled.main`
  margin: 3% 8%;
  height: fit-content;
`;

export const CandidatesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: -20px;
  margin-left: -20px;
  justify-content: center;

  @media only screen and ${device.sm}, only screen and ${device.md} {
    margin-top: -50px;
    margin-left: -50px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 3em;
  font-weight: 300;
  margin: 40px 0;
`;
