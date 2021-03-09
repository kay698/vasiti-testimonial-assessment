import styled from "styled-components";

export const AddTestimonyFormWrap = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  position: fixed;
  bottom: 0;
  background-color: #000000d1;
  z-index: 2000000000000;

  .addTestimonyCard {
    h3 {
      font-weight: 700;
      font-size: 32px;
      line-height: 34px;
      letter-spacing: -0.02em;
    }
    form {
      height: 80%;
      width: 80%;
      margin: 20px 0;

      span,
      label {
        font-weight: normal;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: 0.04em;
        color: #676767;
        margin-bottom: 15px;
      }

      .imageInputWrap {
        border: 1px solid #bbb;
        border-radius: 6px;
        padding: 0 20px;
        background: #fefefe;
        border: 1px solid #eaeaea;
        box-sizing: border-box;
        border-radius: 8px;
        .profileImage {
          margin-bottom: 0;
        }
        p {
          /* width: 112px; */
          height: 19px;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 0.05em;
          color: #676767;
        }
        svg {
          transform: rotate(-20deg);
          font-size: 30px;
          transition: all 0.3s ease;

          :hover {
            opacity: 0.7;
          }
        }
      }
      .nameWrap {
        input {
        }
      }
    }
  }
`;
