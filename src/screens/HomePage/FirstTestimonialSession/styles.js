import styled from "styled-components";

export const FirstTestimonialSessionWrap = styled.div`
  width: 100%;
  height: max-content;
  overflow: hidden;
  padding-top: 100px;
  background: #222222;
  h4 {
    width: 400px;
    font-weight: bold;
    margin-top: 70px;
    color: #ffffff;
  }

  h6 {
    font-size: 18px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #494949;
    width: 400px;
    color: #ffffff;
    margin: 30px 0;
  }
  span {
    padding: 8px 10px;
    font-weight: 500;
    font-size: 13px;
    color: white;
    border: 1px solid #ffffff;
    margin: 10px 0;
    text-transform: uppercase;
    border-radius: 4px;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #ffffff;
    transition: all 0.3s ease;
    padding-bottom: 14px;
    cursor: pointer;
  

    :hover {
      opacity: 0.5;
    }
  }
  .imageWrap {
    width: 650px;
    height: 650px;
    background: #2e2e2e;
    border-radius: 100%;

    img {
      height: 100%;
      width: auto;
      bottom: 100px;
      /* margin-top: 20px; */
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
    .HeaderTextSection {
      margin-top: -130px;
    }
    .imageWrap {
      width: 500px;
      height: 500px;
    }
  }
  @media (max-width: 950px) {
    h4 {
      width: 350px;
      font-size: 28px;
    }
    h6 {
      font-size: 13px;
      line-height: 20px;
      width: 350px;
    }

    .imageWrap {
      width: 450px;
      height: 450px;
    }
  }
  @media (max-width: 830px) {
    h4 {
      width: 340px;
      font-size: 24px;
    }
    h6 {
      font-size: 12px;
      width: 340px;
    }
  }
  @media (max-width: 800px) {
    .HeaderTextSection {
      margin-top: 10px;
    }

    .bodyWrap {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
    padding-top: 0;
    h3 {
      width: 580px;
    }
    h6 {
      font-size: 20px;
      line-height: 25px;
      margin-top: 20px;
      width: 450px;
    }
    .imageWrap {
      margin-top: 50px;
      width: 550px;
      height: 550px;
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
      width: 340px;
      font-size: 30px;
    }
    h6 {
      width: 340px;
      font-size: 14px;
      line-height: 20px;
      margin-top: 2px;
    }
    .imageWrap {
      margin-left: -10px;
      width: 380px;
      height: 380px;
    }
  }
`;
