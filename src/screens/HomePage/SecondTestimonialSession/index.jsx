import React from "react";
import { FlexibleDiv } from "../../../components/FlexBox/styles";
import { SecondTestimonialSessionWrap } from "./styles";
import Typography from "@material-ui/core/Typography";
import Girl from "../../../assets/thirdSection.png";

const SecondTestimonialSession = ({ hadleShowModal }) => {
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
          <p
            onClick={() => {
              hadleShowModal(false);
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

        <FlexibleDiv
          width="max-content"
          className="imageSection"
          height="580px"
        >
          <FlexibleDiv className="imageWrap">
            <img alt="girls" src={Girl} />
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </SecondTestimonialSessionWrap>
  );
};

export default SecondTestimonialSession;
