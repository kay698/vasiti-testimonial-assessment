import React, { useState } from "react";
import { HomePageWrap } from "./styles";
import HeroSection from "./HeroSection";
import GeneralLayout from "../../components/Layout";
import FirstTestimonialSession from "./FirstTestimonialSession";
import SecondTestimonialSession from "./SecondTestimonialSession";
import TopTestimonies from "./TopTestimonies";
import BottomTestimonies from "./BottomTestimonies";
import AddTestimonyForm from "./AddTestimonialPage";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const hadleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <GeneralLayout>
        <HomePageWrap>
          <HeroSection />
          <FirstTestimonialSession hadleShowModal={hadleShowModal} />
          <TopTestimonies />
          <SecondTestimonialSession hadleShowModal={hadleShowModal} />
          <BottomTestimonies />
        </HomePageWrap>
      </GeneralLayout>
      {showModal && <AddTestimonyForm />}
    </>
  );
};

export default HomePage;
