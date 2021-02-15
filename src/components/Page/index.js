import React from "react";
import { PageContainer, PageMessage } from "./styles";
import Header from "../../Header";

const Page = () => {
  return (
    <PageContainer background="./office.jpg">
      <Header />
      <div>
        <PageMessage></PageMessage>
      </div>
    </PageContainer>
  );
};

export default Page;
