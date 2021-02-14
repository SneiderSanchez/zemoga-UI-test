import styled from "styled-components";
import Card from "../Card";
import Button from "../Button";
import { device } from "../../utils/breakpoints";

export const SubmitCard = styled(Card)`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: red;

  background-image: linear-gradient(
      rgba(${({ theme }) => theme.lightBackground}, 0.8),
      rgba(${({ theme }) => theme.lightBackground}, 0.8)
    ),
    url(${({ image }) => image});
  background-position: center;
  padding: 25px 30px;
  margin: 40px 0;
  img {
    margin-left: 20px;
  }
  @media only screen and ${device.sm} {
    height: 50px;
  }
`;

export const VoteButtom = styled(Button)`
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.text};
  background-color: transparent;
  height: 100%;
  width: 210px;
  font-size: 1.3em;
  margin-left: 15px;
  @media only screen and ${device.sm} {
    width: 125px;
    font-size: 1em;
  }
`;

export const Description = styled.p`
  display: flex;
  flex: 1;
  font-size: 2em;
  font-weight: 300;
  @media only screen and ${device.sm} {
    font-size: 1.5em;
  }
  @media only screen and ${device.md} {
    font-size: 1.8em;
  }
`;
