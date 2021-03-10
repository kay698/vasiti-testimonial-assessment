import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";
import { GeneralLayoutWrap, LayoutWrapper } from "./styles";

const Layout = ({ children, showModal }) => {
  return (
    <GeneralLayoutWrap style={{ position: showModal ? "fixed" : "relative" }}>
      <Header />
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
      <Footer />
    </GeneralLayoutWrap>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
