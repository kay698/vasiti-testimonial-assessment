import React from "react";
import { FlexibleDiv } from "../../../components/FlexBox/styles";
import { FirstTestimonialSessionWrap } from "./styles";
import Typography from "@material-ui/core/Typography";
import Girls from "../../../assets/secondSection.png";

const FirstTestimonialSession = () => {
  return (
    <FirstTestimonialSessionWrap>
      <FlexibleDiv
        alignItems="center"
        className="bodyWrap"
        justifyContent="space-evenly"
      >
        <FlexibleDiv width="max-content" className="imageSection">
          <FlexibleDiv className="imageWrap">
            <img alt="girls image" src={Girls} />
          </FlexibleDiv>
        </FlexibleDiv>
        <FlexibleDiv
          flexDir="column"
          width="max-content"
          alignItems="flex-start"
          className="HeaderTextSection"
        >
          <Typography variant={"h4"} className="HeaderSection__headerText">
            Tolu & Joy’s Experience
          </Typography>
          <span>Customer</span>
          <Typography variant={"h6"}>
            HI had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definately be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definately be coming back!
          </Typography>
          <a>SHARE YOUR OWN STORY!</a>
        </FlexibleDiv>
      </FlexibleDiv>
    </FirstTestimonialSessionWrap>
  );
};

export default FirstTestimonialSession;
