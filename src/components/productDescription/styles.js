import styled from "styled-components";
import Card from "../card";

export const DescriptionCard = styled(Card)`
  display: flex;
  align-items: center;
  height: 60px;
  background: ${({ theme }) => theme.background};
  padding: 25px 30px;
  margin: 20px 0;
  img {
    margin-left: 20px;
  }
`;

export const Quote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-right: 20px;
  p {
    font-size: 1.5em;
    font-weight: 300;
  }
  strong {
    font-size: 2.5em;
    font-weight: 800;
  }
`;

export const DescriptionText = styled.p`
  display: flex;
  flex: 1;
  font-size: 1em;
  font-weight: 300;
`;
