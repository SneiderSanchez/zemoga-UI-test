import { object } from "prop-types";
import {
  Name,
  Description,
  Date,
  CandidateContainer,
  InfoContainer,
  VotesResults,
  UpVotes,
  DownVotes,
  ThumbIcon,
  Percentage,
  VotesSummary,
  VoteButtom,
  DownVoteButtom,
  UpVoteButtom,
  VotesHandler,
} from "./styles";
import { darkTheme } from "../../utils/themes";
import { ThemeProvider, withTheme } from "styled-components";
import moment from "moment";

const CandidateCard = ({ candidate }) => {
  const total = candidate.upVotes + candidate.downVotes;
  const percentage = {
    up: ((candidate.upVotes * 100) / total).toFixed(0),
    down: ((candidate.downVotes * 100) / total).toFixed(0),
    highestValue:
      candidate.upVotes >= candidate.downVotes ? "thumbsUp" : "thumbsDown",
  };

  const candidateDate = moment(candidate.startDate).fromNow();

  return (
    <ThemeProvider theme={darkTheme}>
      <CandidateContainer imageUrl={candidate.imageUrl}>
        <InfoContainer>
          <VotesResults
            src={`./${percentage.highestValue}.png`}
            alt={percentage.highestValue}
          />
          <div>
            <Name>{candidate.name}</Name>
            <Date>
              <strong>{candidateDate}</strong> in {candidate.category}
            </Date>
            <Description>{candidate.description}</Description>
            <VotesHandler>
              <UpVoteButtom handleClick={() => {}}>
                <img src={"./thumbsUp.png"} alt={"thumbsUp"}></img>
              </UpVoteButtom>
              <DownVoteButtom handleClick={() => {}}>
                <img src={"./thumbsDown.png"} alt={"thumbsDown"}></img>
              </DownVoteButtom>

              <VoteButtom handleClick={() => {}}>Vote Now</VoteButtom>
            </VotesHandler>
          </div>
        </InfoContainer>
        <VotesSummary>
          <UpVotes percentage={percentage.up}>
            <ThumbIcon src={"./thumbsUp.png"} alt={"thumbsUp"} />
            <Percentage>{percentage.up}%</Percentage>
          </UpVotes>
          <DownVotes percentage={percentage.down}>
            <Percentage>{percentage.down}%</Percentage>
            <ThumbIcon src={"./thumbsDown.png"} alt={"thumbsDown"} />
          </DownVotes>
        </VotesSummary>
      </CandidateContainer>
    </ThemeProvider>
  );
};

CandidateCard.propTypes = {
  candidate: object.isRequired,
};

export default withTheme(CandidateCard);
