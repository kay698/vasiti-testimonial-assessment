import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 100vw;
  height: max-content;
  z-index: 1000000;
  /* transition: 300ms ease-in-out; */
  position: fixed;
  background-color: white;
  right: 0;
  .mainNavBar {
    border-bottom: 1px solid #ddd;
    .mainNavBar__imageWrap {
      width: 150px;
      height: auto;

      img {
        height: 100%;
        width: 100%;
      }
      @media (max-width: 900px) {
        width: 100px;
      }
      @media (max-width: 720px) {
        width: 150px;
      }
    }

    .mainNavBar__container {
      margin-right: 20px;
      width: max-content;
      ul {
        display: flex;
        width: max-content;
        justify-content: flex-end;
        li {
          cursor: pointer;
          position: relative;
          padding: 10px 12px 6px 20px;
          @media (max-width: 710px) {
            padding: 10px 6px 6px 10px;
          }
          a {
            color: #242120;
            text-transform: uppercase;
            font-size: 13px;
            font-weight: 400;
          }
        }
      }
      @media (max-width: 720px) {
        display: none;
      }
    }
    @media (max-width: 1200px) {
      padding: 0 20px;
    }
    @media (max-width: 720px) {
      justify-content: flex-start;
      border-bottom: none;
      height: 120px;
    }
  }

  .subNavBar {
    border-bottom: 2px solid #eee;
    position: relative;

    ::before {
      position: absolute;
      content: "";
      width: 18%;
      height: 1.5px;
      bottom: 0;
      left: 0;
      background-color: #ddd;
      @media (max-width: 1360px) {
        width: 15%;
      }
      @media (max-width: 1170px) {
        width: 10%;
      }
      @media (max-width: 800px) {
        width: 5%;
      }
    }
    ::after {
      position: absolute;
      content: "";
      width: 21.4%;
      height: 1.5px;
      bottom: 0;
      right: 0;
      background-color: #ddd;
      @media (max-width: 1360px) {
        width: 15%;
      }

      @media (max-width: 1170px) {
        width: 10%;
      }
      @media (max-width: 800px) {
        width: 5%;
      }
    }

    ul {
      display: flex;
      width: 100%;
      justify-content: center;
      height: 100%;
      margin-left: 0 !important;
     
      li {
        cursor: pointer;
        position: relative;
        padding-right: 60px;
        height: 100%;
        position: relative;

        @media (max-width: 1000px) {
          padding-right: 30px;
        }
        

        ::before {
          position: absolute;
          content: "";
          width: 30px;
          height: 2px;
          bottom: 30%;
          right: 5%;
          background-color: #ddd;
        }

        :last-child {
          ::before {
            display: none;
          }
        }
        a {
          color: #242120;
          text-transform: uppercase;
          font-size: 13px;
          font-weight: 400;

          @media (max-width: 820px) {
            font-size: 11px;
          }
        }
      }
    }

    @media (max-width: 720px) {
      display: none;
    }
  }
`;
