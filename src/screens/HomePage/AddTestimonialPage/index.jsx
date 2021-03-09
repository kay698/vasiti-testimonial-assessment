import React from "react";
import { AddTestimonyFormWrap } from "./styles";
import { FlexibleDiv } from "../../../components/FlexBox/styles";
import Typography from "@material-ui/core/Typography";
import AttachmentIcon from "@material-ui/icons/Attachment";

const AddTestimonyForm = () => {
  return (
    <AddTestimonyFormWrap>
      <FlexibleDiv height="100%">
        <FlexibleDiv
          className="addTestimonyCard"
          width="40%"
          height="90%"
          bgColor="white"
          flexDir="column"
        >
          <Typography variant={"h3"}>Share your amazing story!</Typography>

          <form>
            <FlexibleDiv
              height="100%"
              flexDir="column"
              alignItems="space-between"
            >
              <span>Upload your Picture</span>
              <FlexibleDiv
                className="imageInputWrap"
                height="70px"
                width="100%"
                justifyContent="space-between"
              >
                <p>Choose Image</p>
                <label htmlFor="profileImage" className={"profileImage"}>
                  <AttachmentIcon />
                </label>
                <input
                  hidden
                  type="file"
                  id={"profileImage"}
                  name={"profileImage"}
                />
              </FlexibleDiv>
              <FlexibleDiv className="nameWrap" height="120px" justifyContent="space-between">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" />
              </FlexibleDiv>
            </FlexibleDiv>
          </form>
        </FlexibleDiv>
      </FlexibleDiv>
    </AddTestimonyFormWrap>
  );
};

export default AddTestimonyForm;
