import React from "react";
import { HomePageWrap } from "./styles";
import HeroSection from "./HeroSection";
import GeneralLayout from "../../components/Layout";
import FirstTestimonialSession from "./FirstTestimonialSession";

const HomePage = () => {
  return (
    <GeneralLayout>
      <HomePageWrap>
        <HeroSection />
        <FirstTestimonialSession />
      </HomePageWrap>
    </GeneralLayout>
  );
};

export default HomePage;
