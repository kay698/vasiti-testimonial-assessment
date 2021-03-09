import React from "react";
import { FlexibleDiv } from "../../../components/FlexBox/styles";
import { FirstTestimonialSessionWrap } from "./styles";
import Typography from "@material-ui/core/Typography";
import Girls from "../../../assets/girls_pic.png";

const FirstTestimonialSession = ({ hadleShowModal }) => {
  return (
    <FirstTestimonialSessionWrap>
      <FlexibleDiv
        alignItems="center"
        className="bodyWrap"
        justifyContent="space-evenly"
      >
        <FlexibleDiv width="max-content" className="imageSection">
          <FlexibleDiv className="imageWrap">
            <img alt="girls" src={Girls} />
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
          <p
            onClick={() => {
              hadleShowModal();
            }}
          >
            SHARE YOUR OWN STORY!
          </p>
            <svg width="300" height="100" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M -80 50 Q 100 -70 1000 100"
                stroke="rgb(250, 116, 7)"
                fill="transparent"
              />
            </svg>
        </FlexibleDiv>
      </FlexibleDiv>
    </FirstTestimonialSessionWrap>
  );
};

export default FirstTestimonialSession;
