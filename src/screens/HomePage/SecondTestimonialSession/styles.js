import styled from "styled-components";

export const SecondTestimonialSessionWrap = styled.div`
  width: 100%;
  height: max-content;
  overflow: hidden;
  padding-top: 100px;
  background: white;
  h4 {
    width: 400px;
    font-weight: bold;
    margin-top: 70px;
    color: #242120;
  }

  h6 {
    font-size: 18px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #494949;
    width: 400px;
    color: #242120;
    margin: 30px 0;
  }
  span {
    padding: 8px 10px;
    font-weight: 500;
    font-size: 13px;
    color: #ff5c00;
    border: 1px solid rgba(255, 92, 0, 0.4);
    margin: 10px 0;
    text-transform: uppercase;
    border-radius: 4px;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #ff5c00;
    transition: all 0.3s ease;
    cursor: pointer;
    padding: 0;
    margin: 0;

    :hover {
      opacity: 0.5;
    }
  }
  .imageWrap {
    width: 650px;
    height: 650px;
    background: #fff8f5;
    border-radius: 100%;
    /* margin-top: 200px; */

    img {
      height: 80%;
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
      margin-top: -100px;
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
      width: 340px;
      height: 340px;
      overflow: hidden;

      img {
        height: 100%;
        margin-top: 50px;
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
      width: 340px;
      font-size: 30px;
    }
    h6 {
      width: 340px;
      font-size: 14px;
      line-height: 20px;
      margin-top: 2px;
    }
  }
`;
