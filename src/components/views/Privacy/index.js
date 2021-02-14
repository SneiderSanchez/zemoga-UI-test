import React from "react";
import { PageContainer, PageMessage } from "../../Page/styles";
import Header from "../../Header";

const Privacy = () => {
  return (
    <PageContainer background="./office.jpg">
      <Header />
      <div>
        <PageMessage>Welcome to Privacy :)</PageMessage>
      </div>
    </PageContainer>
  );
};

export default Privacy;
