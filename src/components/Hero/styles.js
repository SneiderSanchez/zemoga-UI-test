import styled, { css } from "styled-components";
import { lightTheme, darkTheme } from "../../utils/themes";
import Card from "../Card";
import { device } from "../../utils";
import { WikipediaSvg } from "../Icons";

export const VoteBox = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  @media only screen and ${device.sm}, only screen and ${device.md} {
    height: 60px;
  }
`;

export const PersonPresentation = styled(Card)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  @media only screen and ${device.sm}, only screen and ${device.md} {
    padding: 25px;
    &.variant-blured {
      backdrop-filter: blur(5px);
    }
  }
`;

export const HeroContainer = styled.div`
  height: 100vh;
  background-image: url("${({ background }) => background}");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  @media only screen and ${device.sm} {
    background-position: 60% center;
    height: 85vh;
  }

  @media only screen and ${device.md} {
    background-position: 35% center;
  }
`;

export const HeroWrapper = styled.div`
  padding-left: 8%;
  margin-top: 4%;
  height: 400px;
  width: 500px;
  @media only screen and ${device.sm} {
    width: 300px;
  }
  @media only screen and ${device.md} {
    width: 400px;
  }
`;

export const PlaceHolder = styled.span`
  font-size: 1.3em;
  font-weight: 300;
  opacity: 0.8;
`;

export const Title = styled.p`
  font-size: 4em;
  @media only screen and ${device.sm} {
    font-size: 3em;
  }
  @media only screen and ${device.md} {
    font-size: 3.5em;
  }
`;

export const Description = styled.p`
  font-size: 1.3em;
  font-weight: 300;
  margin: 20px 0;
  text-align: justify;
`;

export const MoreInfoLogo = styled(WikipediaSvg)`
  width: 1.5em;
  height: 1.5em;
  display: inline-block;
  margin-right: 5px;
  fill: ${({ theme }) => theme.text};
`;

export const MoreInfo = styled.a`
  font-size: 1em;
  font-weight: 300;
  color: inherit;
  display: flex;
  width: fit-content;
  text-decoration: underline;
`;

export const Question = styled.p`
  font-size: 1.5em;
  font-weight: 700;
  margin-top: 8%;
`;

export const HeroFooter = styled.div`
  height: 50px;
  width: 100%;
  bottom: 0;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;

  @media only screen and ${device.md} {
    height: 60px;
  }
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
  @media only screen and ${device.sm}, only screen and ${device.md} {
    font-size: 1.3em;
  }
`;

export const FooterDaysLeft = styled.p`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 2.5em;
  padding-left: 20px;
  font-weight: 300;
  width: 64%;
  text-align: left;
  color: ${({ theme }) => theme.text};
  background: rgba(${({ theme }) => theme.lightBackground}, 0.3);
  strong {
    font-weight: 500;
    margin-right: 10px;
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
