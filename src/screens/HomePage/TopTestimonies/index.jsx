import React from "react";
import { TestimoniesWrap } from "./styles";
import { FlexibleDiv } from "../../../components/FlexBox/styles";
import { TestimonyList } from "../../../helpers/testimonies";
import Typography from "@material-ui/core/Typography";

const TopTestimonies = ({ localStorageItem }) => {

  // console.log(localStorageItem.location)

  return (
    <TestimoniesWrap>
      <FlexibleDiv justifyContent="space-evenly" alignItems="flex-start">
        {localStorageItem && localStorageItem.location ? (
          <FlexibleDiv
            width="26%"
            className="testimonyContent"
            flexDir="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <div  className="userImageDiv">
              <img src={localStorageItem.userImage} alt="testifier" />
            </div>
            <FlexibleDiv width="max-content">
              <Typography className="mainText" variant={"h6"}>
                {localStorageItem.firstName} {localStorageItem.lastName}
              </Typography>
            </FlexibleDiv>
            <FlexibleDiv justifyContent="flex-start" height="80px">
              <p>{localStorageItem.location}</p>
              <span
                style={{
                  color:
                    localStorageItem.customerType === "vendor"
                      ? "#049A01"
                      : "#0D019A",
                  background:
                    localStorageItem.customerType === "vendor"
                      ? "#F0FFEE"
                      : "#EEF8FF",
                }}
              >
                {localStorageItem.customerType}
              </span>
            </FlexibleDiv>
            <Typography className="mainText">
              {localStorageItem.message}
            </Typography>
          </FlexibleDiv>
        ) : (
          ""
        )}
        {TestimonyList.map(
          (item) =>
            item.location !== "" && (
              <FlexibleDiv
                width="26%"
                className="testimonyContent"
                flexDir="column"
                alignItems="flex-start"
                justifyContent="flex-start"
              >
                <div  className="userImageDiv">
                  <img src={item.userImage} alt="testifier" />
                </div>
                <FlexibleDiv width="max-content">
                  <Typography className="mainText" variant={"h6"}>
                    {item.firstName} {item.lastName}
                  </Typography>
                </FlexibleDiv>
                <FlexibleDiv justifyContent="flex-start" height="80px">
                  <p>{item.location}</p>
                  <span
                    style={{
                      color:
                        item.customerType === "vendor" ? "#049A01" : "#0D019A",
                      background:
                        item.customerType === "vendor" ? "#F0FFEE" : "#EEF8FF",
                    }}
                  >
                    {item.customerType}
                  </span>
                </FlexibleDiv>
                <Typography className="mainText">{item.message}</Typography>
              </FlexibleDiv>
            )
        )}
      </FlexibleDiv>
    </TestimoniesWrap>
  );
};

export default TopTestimonies;
