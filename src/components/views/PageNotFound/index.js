import React from "react";
import { PageContainer, PageMessage } from "../../Page/styles";
import Header from "../../Header";

const PageNotFound = () => {
  return (
    <PageContainer background="./404.jpg">
      <Header />
      <div>
        <PageMessage>Sorry, page not found :(</PageMessage>
      </div>
    </PageContainer>
  );
};

export default PageNotFound;
