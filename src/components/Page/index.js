import React from "react";
import { PageContainer, PageMessage } from "./styles";
import Header from "../../Header";

const Login = () => {
  return (
    <PageContainer background="./office.jpg">
      <Header />
      <div>
        <PageMessage>Welcome to Login :)</PageMessage>
      </div>
    </PageContainer>
  );
};

export default Login;
