import React from "react";

import { SubmitCard, Description, VoteButtom } from "./styles";

const SubmitName = () => {
  return (
    <SubmitCard image={"./people.png"}>
      <Description>Is there anyone else you would want us to add?</Description>
      {/* Add On click to /submit */}
      <VoteButtom>Submit A Name</VoteButtom>
    </SubmitCard>
  );
};

export default SubmitName;
