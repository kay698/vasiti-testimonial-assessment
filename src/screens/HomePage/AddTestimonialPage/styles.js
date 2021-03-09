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
  overflow-y: auto;
  overflow-x: hidden;

  .addTestimonyCard {
    h3 {
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      letter-spacing: -0.02em;

      /* @media (max-width: 700px) {
        margin-top: 40px;
      } */
    }
    form {
      height: 80%;
      width: 60%;
      margin-top: 40px;

      @media (max-width: 820px) {
        width: 92%;
        height: 90%;
        margin-top: 0px;
      }
      input,
      textarea {
        width: 100%;
        height: 62px;
        border: 1px solid #bbb;
        border-radius: 6px;
        padding: 0 20px;
        background: #fefefe;
        border: 1px solid #eaeaea;
        box-sizing: border-box;
        border-radius: 8px;
        transition: all 0.3s ease;
        color: #777777;
        font-size: 16px;

        :hover,
        :active {
          border-color: rgb(250, 116, 7);
        }
      }
      small,
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
        div {
          margin-top: 30px;
          width: 45%;
          input {
            width: 100%;
            margin-top: 15px;
          }
        }
      }
      .messageWrap {
        margin-top: 30px;
        textarea {
          height: 80%;
          padding-top: 10px;
        }
      }
      .radioSection {
        p {
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.04em;
          color: #676767;
        }
        .radioWrap {
          div {
            height: 100%;
          }
          label {
            margin-top: 17px;
          }
          .radio {
            width: 20px;
            height: 20px;
            margin-right: 5px;
            color: red;

            :active {
              border-color: red;
            }
            /* margin: 10px 10px 0 0; */
          }
        }
      }
    }
    .button_wrap {
      @media (max-width: 500px) {
        justify-content: center;
      }
    }
  }
  @media (max-width: 700px) {
    padding-top: 40px;
  }

  .MuiRadio-colorSecondary.Mui-checked {
    color: rgb(250, 116, 10);
  }
`;
