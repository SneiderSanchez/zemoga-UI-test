import styled from "styled-components";
import Card from "../card";
import Button from "../button";

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
`;

export const VoteButtom = styled(Button)`
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.text};
  background-color: transparent;
  height: 100%;
  width: 210px;
  font-size: 1.3em;
`;

export const Description = styled.p`
  display: flex;
  flex: 1;
  font-size: 2em;
  font-weight: 300;
`;
