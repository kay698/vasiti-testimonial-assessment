import React, { useState, useLayoutEffect } from "react";
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
  let [localStorageItem, setLocalStorageItem] = useState(undefined);

  const hadleShowModal = () => {
    setShowModal(!showModal);
  };
  useLayoutEffect(() => {
    let list = JSON.parse(localStorage.getItem("item"));
    setLocalStorageItem(list);
  }, [setLocalStorageItem]);
  return (
    <>
      <GeneralLayout showModal={showModal}>
        <HomePageWrap>
          <HeroSection />
          <FirstTestimonialSession hadleShowModal={hadleShowModal} />
          <TopTestimonies localStorageItem={localStorageItem} />
          <SecondTestimonialSession hadleShowModal={hadleShowModal} />
          <BottomTestimonies localStorageItem={localStorageItem} />
        </HomePageWrap>
      </GeneralLayout>
      <AddTestimonyForm hadleShowModal={hadleShowModal} showModal={showModal} />
    </>
  );
};

export default HomePage;
