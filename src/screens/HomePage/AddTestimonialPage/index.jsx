import React from "react";
import { AddTestimonyFormWrap } from "./styles";
import { FlexibleDiv } from "../../../components/FlexBox/styles";

const AddTestimonyForm = () => {
  return (
    <AddTestimonyFormWrap>
      <FlexibleDiv>
        <FlexibleDiv
          className="email_card"
          width="500px"
          height="550px"
        ></FlexibleDiv>
      </FlexibleDiv>
    </AddTestimonyFormWrap>
  );
};

export default AddTestimonyForm;
