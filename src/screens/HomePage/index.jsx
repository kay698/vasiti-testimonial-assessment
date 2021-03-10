import React, {
  useState,
  useLayoutEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { HomePageWrap } from "./styles";
import HeroSection from "./HeroSection";
import GeneralLayout from "../../components/Layout";
import FirstTestimonialSession from "./FirstTestimonialSession";
import SecondTestimonialSession from "./SecondTestimonialSession";
import TopTestimonies from "./TopTestimonies";
import BottomTestimonies from "./BottomTestimonies";
import AddTestimonyForm from "./AddTestimonialPage";
import { TestimonyList } from "../../helpers/testimonies";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  let [localStorageItem, setLocalStorageItem] = useState(undefined);
  let scrollRef = React.createRef();
  let ref = useRef();

  useImperativeHandle(ref, () => ({
    preventBodyScroll() {
      scrollRef.current.ownerDocument.body.style.overflow = "hidden";
    },
    addBodyScroll() {
      scrollRef.current.ownerDocument.body.style.overflow = "";
    },
  }));
  const hadleShowModal = () => {
    setShowModal(!showModal);
  };
  useLayoutEffect(() => {
    let list = JSON.parse(localStorage.getItem("item"));
    setLocalStorageItem(list);
  }, [setLocalStorageItem]);

  console.log(localStorageItem)
  return (
    <>
      <GeneralLayout ref={scrollRef}>
        <HomePageWrap>
          <HeroSection />
          <FirstTestimonialSession hadleShowModal={hadleShowModal} />
          <TopTestimonies localStorageItem={localStorageItem} />
          <SecondTestimonialSession hadleShowModal={hadleShowModal} />
          <BottomTestimonies localStorageItem={localStorageItem} />
        </HomePageWrap>
        <AddTestimonyForm
          hadleShowModal={hadleShowModal}
          showModal={showModal}
          scrollRef={scrollRef}
          // ref={scrollRef}
        />
      </GeneralLayout>
    </>
  );
};

export default HomePage;
