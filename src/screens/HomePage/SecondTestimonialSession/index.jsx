import React from "react";
import { FlexibleDiv } from "../../../components/FlexBox/styles";
import { SecondTestimonialSessionWrap } from "./styles";
import Typography from "@material-ui/core/Typography";
import Girl from "../../../assets/thirdSection.png";

const SecondTestimonialSession = () => {
  return (
    <SecondTestimonialSessionWrap>
      <FlexibleDiv
        alignItems="center"
        className="bodyWrap"
        justifyContent="space-evenly"
      >
        
        <FlexibleDiv
          flexDir="column"
          width="max-content"
          alignItems="flex-start"
          className="HeaderTextSection"
        >
          <Typography variant={"h4"} className="HeaderSection__headerText">
          Josiah’s Experience
          </Typography>
          <span>Vendor</span>
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

        <FlexibleDiv width="max-content" className="imageSection" height="580px">
          <FlexibleDiv className="imageWrap">
            <img alt="girls image" src={Girl} />
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </SecondTestimonialSessionWrap>
  );
};

export default SecondTestimonialSession;
