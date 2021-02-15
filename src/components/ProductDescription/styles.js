import styled from "styled-components";
import Card from "../Card";
import { device } from "../../utils";
import { CrossSvg } from "../Icons";

export const DescriptionCard = styled(Card)`
  display: flex;
  align-items: center;
  height: 60px;
  background: ${({ theme }) => theme.background};
  padding: 25px 30px;
  margin: 20px 0;
  img {
    width: 20px;
    height: 20px;
  }
  @media only screen and ${device.sm} {
    padding: 15px 20px;
    height: 100px;
    img {
      width: 15px;
      height: 15px;
    }
  }
`;

export const CrossIcon = styled(CrossSvg)`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.text};
  @media only screen and ${device.sm} {
    width: 15px;
    height: 15px;
  }
`;

export const Quote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  p {
    font-size: 1.5em;
    font-weight: 300;
  }
  strong {
    font-size: 2.5em;
    font-weight: 800;
  }
  @media only screen and ${device.sm} {
    width: 30%;
    text-align: center;
    p {
      font-size: 1.4em;
      font-weight: 300;
    }
    strong {
      font-size: 1.7em;
      font-weight: 800;
    }
  }

  @media only screen and ${device.md} {
    p {
      font-size: 1.3em;
      font-weight: 300;
    }
    strong {
      font-size: 2em;
      font-weight: 800;
    }
  }
`;

export const DescriptionText = styled.p`
  display: flex;
  flex: 1;
  font-size: 1em;
  font-weight: 300;
  text-align: justify;
  margin: 0 20px;
  @media only screen and ${device.sm} {
    font-size: 0.9em;
  }
`;
