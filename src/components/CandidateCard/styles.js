import styled, { css } from "styled-components";
import Button from "../Button";
import { device } from "../../utils";

const votetIcon = css`
  margin-right: 15px;
  img {
    height: 18px;
    width: 18px;
    padding: 3px;
  }
`;

export const VotesHandler = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  background-repeat: no-repeat;
`;

export const UpVoteButton = styled(Button)`
  background-color: rgba(${({ theme }) => theme.thumbsUp}, 1);
  ${votetIcon}
  border: 3px solid ${({ isSelected, theme }) =>
    isSelected ? theme.text : "transparent"};
`;

export const DownVoteButton = styled(Button)`
  background-color: rgba(${({ theme }) => theme.thumbsDown}, 1);
  ${votetIcon}
  border: 3px solid ${({ isSelected, theme }) =>
    isSelected ? theme.text : "transparent"};
`;

export const VoteButton = styled(Button)`
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text};
  background-color: transparent;
  height: 40px;
  width: 100px;
`;

export const CandidateContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  transition: all 0.6s;
  height: 525px;
  width: 480px;
  margin-top: 40px;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0),
      rgba(${({ theme }) => theme.lightBackground}, 1)
    ),
    url(${({ imageUrl }) => imageUrl});
  color: ${({ theme }) => theme.text};
  background-position-y: bottom;

  background-size: 100% 100%;
  &:hover {
    background-size: 110% 110%;
  }
  &:nth-child(odd) {
    margin-right: 40px;
  }
  @media only screen and ${device.sm} {
    width: 390px;
    height: 425px;
    margin-left: 0;
    flex: 1;
    &:nth-child(odd) {
      margin-right: 0px;
    }
  }

  @media only screen and ${device.md} {
    width: 390px;
    height: 425px;
    margin-left: 0px;
    &:nth-child(odd) {
      margin-right: 20px;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  font-size: 2.8rem;
  @media only screen and ${device.sm} {
    font-size: 2rem;
  }
  @media only screen and ${device.md} {
    font-size: 2.5rem;
  }
`;

export const Date = styled.p`
  font-size: 0.9rem;
`;

export const Description = styled.p`
  margin: 25px 0;
  font-size: 1rem;
  font-weight: 300;
  width: 90%;
  @media only screen and ${device.sm} {
    font-size: 0.8rem;
    margin: 20px 0;
  }
`;

export const VotesResults = styled.img`
  display: flex;
  // fix this, find a better way to thumbsup to be a the same heihgt of p name
  margin-top: 2%;
  margin-right: 2%;
  height: 1.3em;
  background-color: rgba(${({ theme, alt }) => theme[alt]}, 1);
  padding: 0.5em;
`;

export const VotesSummary = styled.div`
  display: flex;
  height: 10%;
  width: 100%;
`;

const percentajeIcon = css`
  display: flex;
  align-items: center;
`;

export const UpVotes = styled.div`
  ${percentajeIcon}
  width: ${({ percentage }) => percentage}%;
  background-color: rgba(${({ theme }) => theme.thumbsUp}, 0.7);
  justify-content: flex-start;
`;

export const DownVotes = styled.div`
  ${percentajeIcon}
  width: ${({ percentage }) => percentage}%;
  background-color: rgba(${({ theme }) => theme.thumbsDown}, 0.7);
  justify-content: flex-end;
`;

export const ThumbIcon = styled.img`
  height: 25px;
  margin: 0 10px;
  background: solid;
  @media only screen and ${device.sm}, only screen and ${device.md} {
    height: 20px;
  }
`;

export const Percentage = styled.p`
  font-size: 2em;
  font-weight: 300;
`;
