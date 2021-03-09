import styled from "styled-components";

export const HeroSectionWrap = styled.div`
  width: 100%;
  height: max-content;
  overflow: hidden;
  padding-top: 100px;
  h3 {
    height: 180px;
    width: 586px;
    font-weight: bold;
    margin-top: 70px;
  }

  h6 {
    font-size: 18px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #494949;
  }

  .imageWrap {
    width: 650px;
    height: 650px;
    background: #fff8f5;
    border-radius: 100%;

    img {
      height: 90%;
      width: auto;
      bottom: 100px;
      margin-top: -200px;
      z-index: 10000;
    }
  }

  @media (max-width: 1300px) {
    .heroBodyWrap {
    }
    h3 {
      width: 450px;
      font-size: 40px;
    }
  }
  @media (max-width: 1150px) {
    .heroBodyWrap {
    }
    h3 {
      width: 400px;
      font-size: 30px;
      height: 120px;
    }
    h6 {
      font-size: 15px;
    }
    .imageSection {
      height: 350px;
      .imageWrap {
        width: 500px;
        height: 500px;
      }
    }
  }
  @media (max-width: 950px) {
    h3 {
      width: 350px;
      font-size: 28px;
      height: 120px;
    }
    h6 {
      font-size: 13px;
      line-height: 20px;
    }
    .imageSection {
      height: 300px;
      .imageWrap {
        width: 450px;
        height: 450px;
      }
    }
  }
  @media (max-width: 800px) {
    padding-top: 0;
    h3 {
      width: 580px;
      font-size: 40px;
      height: 120px;
    }
    h6 {
      font-size: 20px;
      line-height: 25px;
      margin-top: 20px;
    }
    .imageSection {
      height: 400px;
      margin-top: 100px;
      .imageWrap {
        width: 550px;
        height: 550px;
      }
    }
  }
  @media (max-width: 650px) {
    padding-top: 0;
    h3 {
      width: 450px;
    }
  }
  @media (max-width: 540px) {
    padding-top: 0;
    h3 {
      width: 400px;
      font-size: 30px;
    }
    h6 {
      font-size: 14px;
      line-height: 20px;
      margin-top: 2px;
    }
  }
  @media (max-width: 420px) {
    padding-top: 0;
    h3 {
      width: 320px;
    }
    h6 {
      font-size: 13px;
    }
  }
`;
