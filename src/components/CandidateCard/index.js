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
  VoteButton,
  DownVoteButton,
  UpVoteButton,
  VotesHandler,
} from "./styles";
import { darkTheme } from "../../utils/themes";
import { ThemeProvider, withTheme } from "styled-components";
import { useState } from "react";
import toast from "react-hot-toast";
import moment from "moment";

const CandidateCard = ({ candidateData }) => {
  const [candidate, setCandidate] = useState(candidateData);
  const [selectedOption, setSelectedOption] = useState("");
  const [hasVoted, setHasVoted] = useState(false);

  const total = candidate.upVotes + candidate.downVotes;
  const percentage = {
    up: ((candidate.upVotes * 100) / total).toFixed(0),
    down: ((candidate.downVotes * 100) / total).toFixed(0),
    highestValue:
      candidate.upVotes >= candidate.downVotes ? "thumbsUp" : "thumbsDown",
  };
  const candidateDate = moment(candidate.startDate).fromNow();

  const handleNewVote = () => {
    setSelectedOption("");
    setHasVoted(true);
    const data = window.localStorage.getItem("candidates");
    const oldCandidates = data && data.length ? JSON.parse(data) : [];
    const updatedCandidates = oldCandidates.map((item) =>
      item.id === candidate.id
        ? {
            ...candidate,
            [selectedOption]: item[selectedOption] + 1,
          }
        : item
    );
    if (updatedCandidates.length) {
      window.localStorage.setItem(
        "candidates",
        JSON.stringify(updatedCandidates)
      );
      setCandidate((prevState) => {
        return {
          ...prevState,
          [selectedOption]: prevState[selectedOption] + 1,
        };
      });
      toast.success("Vote Saved Succesfully!");
    } else {
      toast.error("We have a problem saving your vote, try again later");
    }
  };

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
            <Description>
              {hasVoted ? "Thank You for voting!" : candidate.description}
            </Description>
            <VotesHandler>
              {!hasVoted ? (
                <>
                  <UpVoteButton
                    handleClick={() => {
                      setSelectedOption("upVotes");
                    }}
                    isSelected={selectedOption === "upVotes"}
                  >
                    <img src={"./thumbsUp.png"} alt={"thumbsUp"}></img>
                  </UpVoteButton>
                  <DownVoteButton
                    handleClick={() => {
                      setSelectedOption("downVotes");
                    }}
                    isSelected={selectedOption === "downVotes"}
                  >
                    <img src={"./thumbsDown.png"} alt={"thumbsDown"}></img>
                  </DownVoteButton>
                </>
              ) : (
                ""
              )}
              <VoteButton
                handleClick={() => {
                  if (!selectedOption.length && !hasVoted) {
                    toast.error("Please select one option!");
                    return;
                  }

                  if (!hasVoted) {
                    handleNewVote();
                  } else {
                    setHasVoted(false);
                  }
                }}
              >
                {!hasVoted ? "Vote Now" : "Vote Again"}
              </VoteButton>
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
  candidateData: object.isRequired,
};

export default withTheme(CandidateCard);
