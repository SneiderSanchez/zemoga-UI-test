import Hero from "../Hero";
import React from "react";
import CandidateCard from "../CandidateCard";
import { MainContent, CandidatesContainer, SectionTitle } from "./styles.js";
import { candidatesBase } from "../../utils";
//this should be a component?
import ProductDescription from "../ProductDescription";
import SubmitName from "../SubmitName";

function Home() {
  const candidates = candidatesBase;

  return (
    <>
      <Hero />
      <MainContent>
        <ProductDescription />
        <SectionTitle>Votes</SectionTitle>
        <CandidatesContainer>
          {candidates.map((candidate) => (
            <CandidateCard candidate={candidate} key={candidate.id} />
          ))}
        </CandidatesContainer>
        <SubmitName />
      </MainContent>
    </>
  );
}

export default Home;
