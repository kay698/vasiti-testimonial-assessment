import React from "react";
import { TopTestimoniesWrap} from "./styles";
import { FlexibleDiv } from "../../../components/FlexBox/styles";
import { TestimonyList } from "../../../helpers/testimonies";
import Typography from "@material-ui/core/Typography";

const TopTestimonies = () => {
  return (
    <TopTestimoniesWrap>
      <FlexibleDiv justifyContent="space-evenly">
        {TestimonyList.map(
          (item) =>
            item.location && (
              <FlexibleDiv
                width="26%"
                className="testimonyContent"
                flexDir="column"
                alignItems="flex-start"
              >
                <div  className="imageWrap">
                  <img src={item.image} alt="testifier" />
                </div>
                <FlexibleDiv justifyContent="flex-start" height="80px">
                  <p>{item.location}</p>
                  <span
                    style={{
                      color: item.type === "vendor" ? "#049A01" : "#0D019A",
                      background:
                        item.type === "vendor" ? "#F0FFEE" : "#EEF8FF",
                    }}
                  >
                    {item.type}
                  </span>
                </FlexibleDiv>
                <Typography>{item.content}</Typography>
              </FlexibleDiv>
            )
        )}
      </FlexibleDiv>
    </TopTestimoniesWrap>
  );
};

export default TopTestimonies;
