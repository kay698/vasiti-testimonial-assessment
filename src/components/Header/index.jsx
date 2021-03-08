import React, { useEffect, useRef, useState } from "react";
import { throttle } from "lodash";
import { HeaderWrap } from "./styles";
import { FlexibleDiv } from "../FlexBox/styles";
import { CustomButton } from "../Buttons";
import { MainNavItems } from "../../helpers/HeaderNav/headerMainNav";
import Logo from "../../assets/logo.png";

const Header = () => {
  const [navBackground, setNavBackground] = useState(false);

  const navRef = useRef();
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 60;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", throttle(handleScroll, 100));
    return () => {
      document.removeEventListener("scroll", throttle(handleScroll, 100));
    };
  }, []);

  return (
    <HeaderWrap
      style={{
        backgroundColor: navBackground ? "#97958fc1" : "transparent",
        transition: ".3s ease",
      }}
    >
      <FlexibleDiv
        justifyContent="space-around"
        alignItems="center"
        height="80px"
        width="100%"
        className="mainNavBar"
      >
        <div className="mainNavBar__imageWrap">
          <img src={Logo}   alt="vasiti logo"/>
        </div>
        <FlexibleDiv
          justifyContent="flex-end"
          width="750px"
          height="100%"
          className="mainNavBar__container"
        >
          <ul>
            {MainNavItems.map((list) => (
              <li>
                <a href={list.to}>{list.item}</a>
              </li>
            ))}
          </ul>
          <FlexibleDiv
            width="max-content"
            className="mainNavBar__button"
            justifyContent="space-between"
          >
            <CustomButton text="sign up" click={() => {}} sm />
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </HeaderWrap>
  );
};

export default Header;
