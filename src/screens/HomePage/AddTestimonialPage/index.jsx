import React from "react";
import { AddTestimonyFormWrap } from "./styles";
import { FlexibleDiv } from "../../../components/FlexBox/styles";
import Typography from "@material-ui/core/Typography";
// import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import AttachmentIcon from "@material-ui/icons/Attachment";
import { CustomButton } from "../../../components/Buttons";
import Radio from "@material-ui/core/Radio";

const AddTestimonyForm = () => {
  return (
    <AddTestimonyFormWrap>
      <FlexibleDiv height="100%">
        <FlexibleDiv
          className="addTestimonyCard"
          width="100%"
          height="900px"
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
              <small>Upload your Picture</small>
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
              <FlexibleDiv
                className="nameWrap"
                height="120px"
                justifyContent="space-between"
              >
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <br />
                  <input type="text" name="firstName" placeholder="" required />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <br />
                  <input type="text" name="lastName" placeholder="" required />
                </div>
              </FlexibleDiv>
              <FlexibleDiv
                justifyContent="flex-start"
                height="180px"
                className="messageWrap"
                alignItems="center"
              >
                <label htmlFor="message">Share your story</label> <br />
                <textarea name={"message"} placeholder="" required></textarea>
              </FlexibleDiv>
              <FlexibleDiv
                justifyContent="space-between"
                className="radioSection"
              >
                <p>What did you interact with vasiti as?</p>
                <FlexibleDiv
                  width="220px"
                  className="radioWrap"
                  justifyContent="space-between"
                >
                  <FormControlLabel control={<Radio />} label="Customer" />
                  <FormControlLabel control={<Radio />} label="Vendor" />
                </FlexibleDiv>
                <FlexibleDiv justifyContent="flex-start">
                  <label htmlFor="location">
                    City or Higher Insitution(for students)
                  </label>
                  <br />
                  <input type="text" name="location" placeholder="" />
                </FlexibleDiv>
              </FlexibleDiv>
              <FlexibleDiv
                justifyContent="flex-end"
                height="120px"
                className="button_wrap"
              >
                <CustomButton text="Share Y0ur Story!" click={() => {}} />
              </FlexibleDiv>
            </FlexibleDiv>
          </form>
        </FlexibleDiv>
      </FlexibleDiv>
    </AddTestimonyFormWrap>
  );
};

export default AddTestimonyForm;
