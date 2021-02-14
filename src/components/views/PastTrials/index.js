import React from "react";
import { PageContainer, PageMessage } from "../../Page/styles";
import Header from "../../Header";

const PastTrials = () => {
  return (
    <PageContainer background="./office.jpg">
      <Header />
      <div>
        <PageMessage>Welcome to PastTrials :)</PageMessage>
      </div>
    </PageContainer>
  );
};

export default PastTrials;
