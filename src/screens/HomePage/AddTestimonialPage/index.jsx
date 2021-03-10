import React, { useImperativeHandle, useRef, useState } from "react";
import { AddTestimonyFormWrap } from "./styles";
import { FlexibleDiv } from "../../../components/FlexBox/styles";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import AttachmentIcon from "@material-ui/icons/Attachment";
import CloseIcon from "@material-ui/icons/Close";
import { CustomButton } from "../../../components/Buttons";
import Radio from "@material-ui/core/Radio";
import { OverFlowScrollBar } from "../../../components/OverflowScroll/styles";

const AddTestimonyForm = ({ hadleShowModal, showModal }) => {
  let [showCongratulatoryModal, setShowCongratulatoryModal] = useState(false);
  let scrollRef = React.createRef();
  let ref = useRef();

  useImperativeHandle(ref, () => ({
    preventBodyScroll() {
      scrollRef.current.ownerDocument.body.style.overflow = "hidden";
    },
    addBodyScroll() {
      scrollRef.current.ownerDocument.body.style.overflow = "";
    },
  }));

  const close = () => {
    scrollRef.current.ownerDocument.body.style.overflow = "";
    hadleShowModal();
  };
  const handleShowCongratulatoryModal = () => {
    setShowCongratulatoryModal(showCongratulatoryModal);
  };
  return (
    <AddTestimonyFormWrap ref={scrollRef} showModal={showModal}>
      <div className={"overlay"} />

      <div className="main">
        <div className="event" onClick={() => close()} />
        {!showCongratulatoryModal ? (
          <div className="modalBody">
            <div className="modalWrap">
              <header>
                <div className="modalHead">
                  <Typography variant={"h3"}>
                    Share your amazing story!
                  </Typography>
                </div>
                <span className="closeBtn" onClick={() => close()}>
                  <CloseIcon />
                </span>
              </header>

              <OverFlowScrollBar className="modalContainer">
                <FlexibleDiv>
                  <form>
                    <FlexibleDiv
                      height="100%"
                      flexDir="column"
                      alignItems="space-between"
                    >
                      <small>Upload your Picture</small>
                      <FlexibleDiv
                        className="imageInputWrap"
                        height="70px"
                        width="100%"
                        justifyContent="space-between"
                      >
                        <p>Choose Image</p>
                        <label
                          htmlFor="profileImage"
                          className={"profileImage"}
                        >
                          <AttachmentIcon />
                        </label>
                        <input
                          hidden
                          type="file"
                          id={"profileImage"}
                          name={"profileImage"}
                        />
                      </FlexibleDiv>
                      <FlexibleDiv
                        className="nameWrap"
                        height="120px"
                        justifyContent="space-between"
                      >
                        <div>
                          <label htmlFor="firstName">First Name</label>
                          <br />
                          <input
                            type="text"
                            name="firstName"
                            placeholder=""
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName">Last Name</label>
                          <br />
                          <input
                            type="text"
                            name="lastName"
                            placeholder=""
                            required
                          />
                        </div>
                      </FlexibleDiv>
                      <FlexibleDiv
                        justifyContent="flex-start"
                        height="180px"
                        className="messageWrap"
                        alignItems="center"
                      >
                        <label htmlFor="message">Share your story</label> <br />
                        <textarea
                          name={"message"}
                          placeholder=""
                          required
                        ></textarea>
                      </FlexibleDiv>
                      <FlexibleDiv
                        justifyContent="space-between"
                        className="radioSection"
                      >
                        <p>What did you interact with vasiti as?</p>
                        <FlexibleDiv
                          width="220px"
                          className="radioWrap"
                          justifyContent="space-between"
                        >
                          <FormControlLabel
                            control={<Radio />}
                            label="Customer"
                          />
                          <FormControlLabel
                            control={<Radio />}
                            label="Vendor"
                          />
                        </FlexibleDiv>
                        <FlexibleDiv justifyContent="flex-start">
                          <label htmlFor="location">
                            City or Higher Insitution(for students)
                          </label>
                          <br />
                          <input type="text" name="location" placeholder="" />
                        </FlexibleDiv>
                      </FlexibleDiv>
                      <FlexibleDiv
                        justifyContent="flex-end"
                        height="120px"
                        className="button_wrap"
                      >
                        <CustomButton
                          text="Share Y0ur Story!"
                          click={() => {handleShowCongratulatoryModal()}}
                        />
                      </FlexibleDiv>
                    </FlexibleDiv>
                  </form>
                </FlexibleDiv>
              </OverFlowScrollBar>
            </div>
          </div>
        ) : (
          <FlexibleDiv>
              <div>🎉</div>
              <Typography  variant={"h5"}>Thank you for sharing your story!</Typography>
          </FlexibleDiv>
        )}
      </div>
    </AddTestimonyFormWrap>
  );
};

export default AddTestimonyForm;
