import React from "react";
import {
  HeroContainer,
  HeroWrapper,
  Title,
  PlaceHolder,
  PersonPresentation,
  Description,
  MoreInfo,
  MoreInfoLogo,
  Question,
  HeroFooter,
  FooterMessage,
  FooterDaysLeft,
  ThumbsDown,
  ThumbsUp,
  VoteBox,
} from "./styles";
import Header from "../header";
import { lightTheme, darkTheme } from "../../utils/themes";
import { ThemeProvider, withTheme } from "styled-components";

const Hero = ({ theme }) => {
  return (
    <HeroContainer background={`./pope.png`}>
      <Header />
      <HeroWrapper>
        <PersonPresentation className={"variant-blured"}>
          <div>
            <PlaceHolder>what is your opinion on</PlaceHolder>
            <Title>Pope Francis?</Title>
            <Description>
              He’s talking tough on clergy sexual abuse, but is he just another
              papal pervert protector? (thumbs down) or a true pedophile
              punishing pontiff? (thumbs up)
            </Description>
            <MoreInfo href="https://en.wikipedia.org/wiki/Pope_Francis">
              <MoreInfoLogo src="/wikiW.svg"></MoreInfoLogo>
              More Information
            </MoreInfo>
            <Question>What's Your Veredict?</Question>
          </div>
        </PersonPresentation>
        <VoteBox>
          <ThumbsUp>
            <img src={"./thumbsUp.png"} alt={"thumbsUp"} />
          </ThumbsUp>
          <ThumbsDown>
            <img src={"./thumbsDown.png"} alt={"thumbsDown"} />
          </ThumbsDown>
        </VoteBox>
      </HeroWrapper>
      <HeroFooter>
        <ThemeProvider
          theme={theme.body === lightTheme.body ? darkTheme : lightTheme}
        >
          <FooterMessage>CLOSING IN</FooterMessage>
        </ThemeProvider>
        <FooterDaysLeft>
          <strong>22</strong> days
        </FooterDaysLeft>
      </HeroFooter>
    </HeroContainer>
  );
};

export default withTheme(Hero);
