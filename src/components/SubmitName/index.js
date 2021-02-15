import React from "react";

import { SubmitCard, Description, VoteButton } from "./styles";

const SubmitName = () => {
  return (
    <SubmitCard image={"./people.png"}>
      <Description>Is there anyone else you would want us to add?</Description>
      <VoteButton>Submit A Name</VoteButton>
    </SubmitCard>
  );
};

export default SubmitName;
