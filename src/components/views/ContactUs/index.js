import React from "react";
import { PageContainer, PageMessage } from "../../Page/styles";
import Header from "../../Header";

const ContactUs = () => {
  return (
    <PageContainer background="./office.jpg">
      <Header />
      <div>
        <PageMessage>Welcome to ContactUs :)</PageMessage>
      </div>
    </PageContainer>
  );
};

export default ContactUs;
