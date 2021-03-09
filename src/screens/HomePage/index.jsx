import React from "react";
import { HomePageWrap } from "./styles";
import HeroSection from "./HeroSection";
import GeneralLayout from "../../components/Layout";
import FirstTestimonialSession from "./FirstTestimonialSession";
import SecondTestimonialSession from "./SecondTestimonialSession";
import TopTestimonies from "./TopTestimonies";
import BottomTestimonies from "./BottomTestimonies";

const HomePage = () => {
  return (
    <GeneralLayout>
      <HomePageWrap>
        <HeroSection />
        <FirstTestimonialSession />
        <TopTestimonies />
        <SecondTestimonialSession />
        <BottomTestimonies />
      </HomePageWrap>
    </GeneralLayout>
  );
};

export default HomePage;
