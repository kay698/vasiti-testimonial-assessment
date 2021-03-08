import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 100vw;
  height: 200px;
  z-index: 1000000;
  transition: 300ms ease-in-out;
  position: fixed;
  right: 0;
  .mainNavBar {
    border-bottom: 1px solid #ddd;
    /* padding-right: 50px; */
    @media (max-width: 450px) {
      padding-right: 10px;
    }
    .mainNavBar__imageWrap {
      width: 150px;
      height: auto;

      img {
        height: 100%;
        width: 100%;
      }
    }

    .mainNavBar__container {
      ul {
        display: flex;
        width: 60%;
        justify-content: flex-end;
        li {
          list-style-type: none;
          cursor: pointer;
          position: relative;
          padding: 10px 12px 6px 20px;
          a {
            color: #242120;
            text-transform: uppercase;
            font-size: 13px;
            font-weight: 400;
            text-decoration: none;
          }
        }
      }
    }
    @media (max-width: 690px) {
      width: 90%;
    }
    .mainNavBar__container {
      @media (max-width: 620px) {
        width: 100%;
        margin-right: 20px;
      }
    }
  }

  @media (max-width: 700px) {
    height: 50px;
    .nav {
      display: none;
    }
    .mobile-menu {
      display: block;
    }
  }
`;
