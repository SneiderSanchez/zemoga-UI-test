import styled from "styled-components";
import { HeroContainer } from "../Hero/styles";
import { lightTheme, darkTheme } from "../../utils/themes";

export const PageContainer = styled(HeroContainer)`
  //Better way to do this :(
  background-image: linear-gradient(
      rgba(
        ${({ theme }) =>
          theme.lightBackground === lightTheme.lightBackground
            ? `${lightTheme.lightBackground}, 0.1`
            : `${darkTheme.lightBackground}, 0.35`}
      ),
      rgba(${({ theme }) => theme.lightBackground}, 0)
    ),
    url(${({ background }) => background});
  margin-bottom: 40px;
  div {
    padding: 0 8%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PageMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  background-color: rgba(${({ theme }) => theme.lightBackground}, 0.3);
  backdrop-filter: blur(10px);
  text-align: center;
`;
