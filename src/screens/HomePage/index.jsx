import React, { useState, useEffect } from "react";
import { HomePageWrap } from "./styles";
import HeroSection from "./HeroSection";
import GeneralLayout from "../../components/Layout";
import FirstTestimonialSession from "./FirstTestimonialSession";
import SecondTestimonialSession from "./SecondTestimonialSession";
import TopTestimonies from "./TopTestimonies";
import BottomTestimonies from "./BottomTestimonies";
import AddTestimonyForm from "./AddTestimonialPage";
// import { TestimonyList } from "../../helpers/testimonies";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const hadleShowModal = () => {
    setShowModal(!showModal);
  };

  // useEffect(() => {
  //   let list = JSON.parse(localStorage.getItem("item"));
  //   list && TestimonyList.unshift(list);
  //   console.log(list)
  // }, [TestimonyList]);

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
      <AddTestimonyForm hadleShowModal={hadleShowModal} showModal={showModal} />
    </>
  );
};

export default HomePage;
