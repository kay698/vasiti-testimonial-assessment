import styled from "styled-components";

export const BottomTestimoniesWrap = styled.div`
  width: 100%;
  height: max-content;
  padding-top: 100px;

  .testimonyContent {
    margin: 40px 0;

    p {
      color: #535353;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      letter-spacing: 0.05em;
    }
    span {
      border-radius: 4px;
      padding: 8px 10px;
    }
    h6 {
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 0.02em;
      color: #474747;
      margin-top : 20px;
    }
  }

  @media (max-width: 900px) {
    .testimonyContent {
      width: 40%;
    }
  }
  @media (max-width: 600px) {
    .testimonyContent {
      width: 90%;
    }
  }
`;
