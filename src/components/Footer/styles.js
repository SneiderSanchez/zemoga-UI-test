import styled from "styled-components";
import { device } from "../../utils/breakpoints";
import { FacebookSvg, TwitterSvg } from "../Icons";

export const Footer = styled.footer`
  display: flex;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.text} 10%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: top;
  background-size: 8px 1px;
  background-repeat: repeat-x;
  margin: 50px 0;
  padding-top: 40px;
  font-size: 0.8em;
  font-weight: 300;
  margin: 3% 8%;

  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin-right: 20px;
  }

  li a {
    color: inherit;
    text-decoration: none;
  }
  @media only screen and ${device.sm} {
    flex-direction: column;
    ul {
      justify-content: center;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  p {
    margin-right: 20px;
  }

  img {
    width: 25px;
    height: 25px;
    margin-right: 20px;
  }
  @media only screen and ${device.sm} {
    margin: 40px 0;
  }
`;

export const FacebookIcon = styled(FacebookSvg)`
  width: 25px;
  height: 25px;
  margin-right: 20px;
  fill: ${({ theme }) => theme.text};
`;

export const TwitterIcon = styled(TwitterSvg)`
  width: 25px;
  height: 25px;
  margin-right: 20px;
  fill: ${({ theme }) => theme.text};
`;
