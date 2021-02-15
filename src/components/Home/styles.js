import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
  margin: 0 auto;
  height: fit-content;
  width: 90%;
  max-width: 1000px;

  @media only screen and ${device.md} {
    max-width: 800px;
  }
`;

export const CandidatesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 0;
  max-width: 1100px;

  @media only screen and ${device.md} {
    max-width: 800px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 3em;
  font-weight: 300;
  margin: 20px 0;
`;
