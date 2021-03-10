import React from "react";
import { TopTestimoniesWrap } from "./styles";
import { FlexibleDiv } from "../../../components/FlexBox/styles";
import { TestimonyList } from "../../../helpers/testimonies";
import Typography from "@material-ui/core/Typography";

const TopTestimonies = () => {
  return (
    <TopTestimoniesWrap>
      <FlexibleDiv justifyContent="space-evenly">
        {TestimonyList.map(
          (item) =>
            item.location !== "" && (
              <FlexibleDiv
                width="26%"
                className="testimonyContent"
                flexDir="column"
                alignItems="flex-start"
              >
                <div>
                  <img src={item.userImage} alt="testifier" />
                </div>
                <FlexibleDiv width="max-content" >
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
    </TopTestimoniesWrap>
  );
};

export default TopTestimonies;
