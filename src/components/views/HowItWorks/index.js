import React from "react";
import { PageContainer, PageMessage } from "../../Page/styles";
import Header from "../../Header";

const HowItWorks = () => {
  return (
    <PageContainer background="./office.jpg">
      <Header />
      <div>
        <PageMessage>Welcome to How It Works :)</PageMessage>
      </div>
    </PageContainer>
  );
};

export default HowItWorks;
