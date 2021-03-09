import React from "react";
import { HeaderWrap } from "./styles";
import { FlexibleDiv } from "../FlexBox/styles";
import { CustomButton } from "../Buttons";
import { MainNavItems } from "../../helpers/HeaderNav/headerMainNav";
import {SubNavItems} from "../../helpers/HeaderNav/headerSubNav"
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <HeaderWrap>

      {/* top header nav with signup button */}
      <FlexibleDiv
        justifyContent="space-around"
        alignItems="center"
        height="80px"
        width="100%"
        className="mainNavBar"
        flexWrap="no-wrap"
      >
        <div className="mainNavBar__imageWrap">
          <img src={Logo} alt="vasiti logo" />
        </div>
        <FlexibleDiv
          justifyContent="flex-end"
          width="750px"
          height="100%"
          className="mainNavBar__container"
          flexWrap="no-wrap"
        >
          <ul>
            {MainNavItems.map((list) => (
              <li>
                <a href="/">{list.item}</a>
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


      {/* sub header nav without button */}
      <FlexibleDiv className="subNavBar" height="50px" justifyContent="flex-start">
        <ul> 
          {SubNavItems.map((list) => (
            <li>
              <a href="/">{list.item}</a>
            </li>
          ))}
        </ul>
      </FlexibleDiv>
    </HeaderWrap>
  );
};

export default Header;
