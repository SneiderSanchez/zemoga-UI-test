import Hero from "../Hero";
import React from "react";
import CandidateCard from "../CandidateCard";
import { MainContent, CandidatesContainer, SectionTitle } from "./styles.js";
import { candidatesBase } from "../../utils";
import ProductDescription from "../ProductDescription";
import SubmitName from "../SubmitName";
import { useEffect } from "react";

function Home() {
  const savedCandidates = window.localStorage.getItem("candidates") || [];
  const candidates =
    savedCandidates && savedCandidates.length
      ? JSON.parse(savedCandidates)
      : candidatesBase;

  useEffect(() => {
    const savedCandidates = window.localStorage.getItem("candidates") || [];
    if (!savedCandidates.length) {
      window.localStorage.setItem("candidates", JSON.stringify(candidatesBase));
    }
  }, []);

  return (
    <>
      <Hero />
      <MainContent>
        <ProductDescription />
        <SectionTitle>Votes</SectionTitle>
        <CandidatesContainer>
          {candidates.map((candidate) => (
            <CandidateCard candidateData={candidate} key={candidate.id} />
          ))}
        </CandidatesContainer>
        <SubmitName />
      </MainContent>
    </>
  );
}

export default Home;
