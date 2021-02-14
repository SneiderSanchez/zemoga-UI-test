import styled, { css } from "styled-components";
import { lightTheme, darkTheme } from "../../utils/themes";
import Card from "../Card";

export const VoteBox = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

export const PersonPresentation = styled(Card)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 40px 40px;
`;

export const HeroContainer = styled.div`
  height: 100vh;
  background-image: url("${({ background }) => background}");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const HeroWrapper = styled.div`
  padding-left: 8%;
  margin-top: 4%;
  height: 400px;
  width: 500px;
`;

export const PlaceHolder = styled.span`
  font-size: 1.3em;
  font-weight: 300;
  opacity: 0.8;
`;

export const Title = styled.p`
  font-size: 4em;
`;

export const Description = styled.p`
  font-size: 1.3em;
  font-weight: 300;
  margin: 20px 0;
  text-align: justify;
`;

export const MoreInfoLogo = styled.img`
  width: 1.5em;
  height: 1.5em;
  display: inline-block;
  margin-right: 5px;
`;

export const MoreInfo = styled.a`
  font-size: 1em;
  font-weight: 300;
  color: inherit;
  display: flex;
`;

export const Question = styled.p`
  font-size: 1.5em;
  font-weight: 700;
  margin-top: 8%;
`;

export const HeroFooter = styled.div`
  height: 5%;
  width: 100%;
  bottom: 0;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const FooterMessage = styled.p`
  font-size: 1em;
  text-align: top-;
  width: 35%;
  padding: 0 10px 0 0;
  height: 100%;
  background: rgba(${({ theme }) => theme.lightBackground}, 0.3);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  color: ${({ theme }) => theme.text};

  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 0.5em solid transparent;
    // better way for this :(
    border-left-color: rgba(
      ${({ theme }) =>
        theme.lightBackground === lightTheme.lightBackground
          ? `${lightTheme.lightBackground}, 0.7`
          : `${darkTheme.lightBackground}, 0.35`}
    );
    border-right: 0;
    margin-top: -0.5em;
    margin-right: -0.5em;
  }
`;

export const FooterDaysLeft = styled.p`
  height: 100%;
  font-size: 2.5em;
  padding-left: 1%;
  font-weight: 300;
  width: 64%;
  text-align: left;
  color: ${({ theme }) => theme.text};
  background: rgba(${({ theme }) => theme.lightBackground}, 0.3);
  strong {
    font-weight: 500;
  }
`;

const thumbsIcons = css`
  display: flex;
  align-items: center;
  height: 100%;
  width: 50%;
  justify-content: center;
`;

export const ThumbsUp = styled.div`
  ${thumbsIcons};
  background-color: rgba(${({ theme }) => theme.thumbsUp}, 0.9);
`;

export const ThumbsDown = styled.div`
  ${thumbsIcons};
  background-color: rgba(${({ theme }) => theme.thumbsDown}, 0.9);
`;
