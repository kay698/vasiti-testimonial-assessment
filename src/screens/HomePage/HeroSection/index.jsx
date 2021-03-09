import React from "react";
import { FlexibleDiv } from "../../../components/FlexBox/styles";
import { HeroSectionWrap } from "./styles";
import Typography from "@material-ui/core/Typography";
import HeroImage from "../../../assets/hero.png"

const HeroSection = () => {
  return (
    <HeroSectionWrap>
      <FlexibleDiv  alignItems="flex-start"  className="heroBodyWrap">
        <FlexibleDiv
          flexDir="column"
          width="max-content"
          alignItems="flex-start"
          className="HeaderTextSection"
        >
          <Typography variant={"h3"} className="HeaderSection__headerText">
            Amazing <br /> Experiences from Our Wonderful Customers
          </Typography>
          <Typography variant={"h6"}>
            Here is what customers and vendors are saying about <br /> us, you
            can share your stories with us too.
          </Typography>
        </FlexibleDiv>
        <FlexibleDiv width="max-content" height="500px" className="imageSection">
          <FlexibleDiv className="imageWrap"> 
            <img alt="hero section" src={HeroImage}/>
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </HeroSectionWrap>
  );
};

export default HeroSection;
