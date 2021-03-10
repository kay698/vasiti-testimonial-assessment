import styled from "styled-components";

export const AddTestimonyFormWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000000;
  visibility: ${(props) => (props.showModal ? "visible" : "hidden")};

  .overlay {
    z-index: -1;
    position: fixed;
    touch-action: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .main {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 300ms ease-in-out;
    transform: ${(props) =>
      props.showModal ? "translateY(0)" : "translateY(-80vh);"};
    .event {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .modalBody {
      position: relative;
      width: max-content;
      max-width: 700px;
      @media (max-width: 700px) {
        width: 90%;
      }
      width: 100%;

      max-height: 90vh;
      height: max-content;
      overflow: hidden;
      border-radius: 6px;
      box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
        0px 24px 38px 3px rgba(0, 0, 0, 0.14),
        0px 9px 46px 8px rgba(0, 0, 0, 0.12);
      background-color: #fff;
      display: flex;
      justify-content: center;
      .modalWrap {
        height: 100%;
        width: 100%;
        & > header {
          position: relative;
          height: 100px;
          width: 100%;
          background: white;
          right: 0;
          left: 0;
          top: 0;
        }
        .modalHead {
          width: 87%;
          position: absolute;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          h3 {
            font-weight: 700;
            font-size: 28px;
            line-height: 34px;
            letter-spacing: -0.02em;

            @media (max-width: 700px) {
              font-size: 20px;
            }
          }
        }
        .closeBtn {
          position: relative;
          right: 30px;
          float: right;
          top: 20px;
          cursor: pointer;
        }
      }
      .modalContainer {
        overflow-y: scroll;
        overflow-x: hidden;
        width: 100%;
        max-height: 70vh;

        & > div {
          width: 100%;
          min-width: 100%;
        }

        form {
          height: 90%;
          width: 90%;
          margin-top: 40px;

          @media (max-width: 820px) {
            width: 85%;
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
              }
            }
          }
        }
        .button_wrap {
          @media (max-width: 500px) {
            justify-content: center;
          }
        }

        .MuiRadio-colorSecondary.Mui-checked {
          color: rgb(250, 116, 10);
        }

        .title {
          display: none;
        }
      }
    }
  }
`;
