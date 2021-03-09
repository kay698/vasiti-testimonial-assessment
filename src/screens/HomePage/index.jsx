import React from "react";
import { HomePageWrap } from "./styles";
import HeroSection from "./HeroSection";
import GeneralLayout from "../../components/Layout";
import FirstTestimonialSession from "./FirstTestimonialSession";
import SecondTestimonialSession from "./SecondTestimonialSession";

const HomePage = () => {
  return (
    <GeneralLayout>
      <HomePageWrap>
        <HeroSection />
        <FirstTestimonialSession />
        <SecondTestimonialSession />
      </HomePageWrap>
    </GeneralLayout>
  );
};

export default HomePage;
