import styled, { css } from "styled-components";
import Button from "../Button";

const votetIcon = css`
  margin-right: 20px;
  img {
    height: 20px;
    width: 20px;
    padding: 10px;
  }
`;
export const VotesHandler = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  background-repeat: no-repeat;
`;

export const UpVoteButtom = styled(Button)`
  background-color: rgba(${({ theme }) => theme.thumbsUp}, 1);
  ${votetIcon}
`;

export const DownVoteButtom = styled(Button)`
  background-color: rgba(${({ theme }) => theme.thumbsDown}, 1);
  ${votetIcon}
`;

export const VoteButtom = styled(Button)`
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
  background-repeat: no-repeat;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0),
      rgba(${({ theme }) => theme.lightBackground}, 1)
    ),
    url(${({ imageUrl }) => imageUrl});
  height: 525px;
  transform: scale(1, 1);
  color: ${({ theme }) => theme.text};
  background-position-y: center;

  background-size: 110% 110%;
  &:hover {
    background-size: 120% 120%;
    background-position-x: left;
  }
  transition: all 0.6s;
  width: 500px;
  margin-top: 20px;
  margin-left: 20px;
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
`;

export const Date = styled.p`
  font-size: 0.9rem;
`;

export const Description = styled.p`
  margin: 5% 0;
  font-size: 1rem;
  font-weight: 300;
`;

export const VotesResults = styled.img`
  display: flex;
  // fix this, find a better way to thumbsup to be a thte same heihgt of p name
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
  height: 30px;
  margin: 0 10px;
  background: solid;
`;

export const Percentage = styled.p`
  font-size: 2em;
  font-weight: 300;
`;
