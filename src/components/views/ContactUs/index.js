import React from "react";
import { PageContainer, PageMessage } from "../../Page/styles";
import Header from "../../Header";

const ContactUs = () => {
  return (
    <PageContainer background="./office.jpg">
      <Header />
      <div>
        <PageMessage>Welcome to Contact Us :)</PageMessage>
      </div>
    </PageContainer>
  );
};

export default ContactUs;
