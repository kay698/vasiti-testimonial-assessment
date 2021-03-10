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
import RadioGroup from "@material-ui/core/RadioGroup";
import { Form, Formik } from "formik";

const initialValues = {
  userImage: "",
  firstName: "",
  lastName: "",
  message: "",
  customerType: null,
  location: "",
};

const AddTestimonyForm = ({ hadleShowModal, showModal }) => {
  let [showCongratulatoryModal, setShowCongratulatoryModal] = useState(false);
  let [imageUrl, setImageUrl] = useState("");
  let [formValue, setFormValue] = useState({});
  let [radioValue, setRadioValue] = useState("");
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
  const handleShowCongratulatoryModal = (value) => {
    value === false && close();
    setShowCongratulatoryModal(!showCongratulatoryModal);
  };
  const handleRadioValue = (event) => {
    setRadioValue(event.target.value);
  };

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    setFormValue({ ...formValue, [name]: value });
  };

  const getImage = ({ target: { files } }) => {
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = async () => {
      await setImageUrl(reader.result);
    };
  };

  console.log(imageUrl);
  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      values = {
        ...formValue,
        customerType: radioValue,
        userImage: imageUrl,
      };
      setSubmitting(false);
      handleShowCongratulatoryModal();
      console.log(values);
      resetForm();
    } catch (e) {
      setSubmitting(false);
    }
  };

  // console.log(formValue);
  return (
    <AddTestimonyFormWrap ref={scrollRef} showModal={showModal}>
      <div className={"overlay"} />

      <div className="main">
        <div className="event" onClick={() => close()} />
        <div className="modalBody">
          <div className="modalWrap">
            {!showCongratulatoryModal ? (
              <>
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
                    <Formik
                      initialValues={{ ...initialValues }}
                      onSubmit={onSubmit}
                    >
                      <Form>
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
                            {imageUrl !== "" ? (
                              <p>IMG_PIC</p>
                            ) : (
                              <p>Choose Image</p>
                            )}

                            <label htmlFor="userImage" className={"userImage"}>
                              <AttachmentIcon />
                            </label>
                            <input
                              hidden
                              type="file"
                              id={"userImage"}
                              name={"userImage"}
                              onChange={getImage}
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
                                value={formValue.firstName}
                                placeholder=""
                                required
                                onChange={handleChange}
                              />
                            </div>
                            <div>
                              <label htmlFor="lastName">Last Name</label>
                              <br />
                              <input
                                type="text"
                                name="lastName"
                                value={formValue.lastName}
                                placeholder=""
                                required
                                onChange={handleChange}
                              />
                            </div>
                          </FlexibleDiv>
                          <FlexibleDiv
                            justifyContent="flex-start"
                            height="180px"
                            className="messageWrap"
                            alignItems="center"
                          >
                            <label htmlFor="message">Share your story</label>{" "}
                            <br />
                            <textarea
                              name={"message"}
                              value={formValue.message}
                              placeholder=""
                              required
                              onChange={handleChange}
                            ></textarea>
                          </FlexibleDiv>
                          <FlexibleDiv
                            justifyContent="space-between"
                            className="radioSection"
                          >
                            <p>What did you interact with vasiti as?</p>
                            <RadioGroup
                              aria-label="type"
                              name="customerType"
                              value={radioValue}
                              onChange={handleRadioValue}
                            >
                              <FlexibleDiv
                                width="220px"
                                className="radioWrap"
                                justifyContent="space-between"
                              >
                                <FormControlLabel
                                  control={<Radio />}
                                  label="Customer"
                                  value="customer"
                                />
                                <FormControlLabel
                                  control={<Radio />}
                                  label="Vendor"
                                  value="vendor"
                                />
                              </FlexibleDiv>
                            </RadioGroup>
                            <FlexibleDiv justifyContent="flex-start">
                              <label htmlFor="location">
                                City or Higher Insitution(for students)
                              </label>
                              <br />
                              <input
                                type="text"
                                name="location"
                                value={formValue.location}
                                placeholder=""
                                onChange={handleChange}
                              />
                            </FlexibleDiv>
                          </FlexibleDiv>
                          <FlexibleDiv
                            justifyContent="flex-end"
                            height="120px"
                            className="button_wrap"
                          >
                            <CustomButton
                              text="Share Your Story!"
                              click={() => {}}
                              type="submit"
                            />
                          </FlexibleDiv>
                        </FlexibleDiv>
                      </Form>
                    </Formik>
                  </FlexibleDiv>
                </OverFlowScrollBar>
              </>
            ) : (
              <FlexibleDiv
                height="500px"
                flexDir="column"
                className="thanksWrap"
              >
                <p>🎉</p>
                <Typography variant={"h6"}>
                  Thank you for <br />
                  sharing your story!
                </Typography>
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </small>
                <CustomButton
                  text="Close"
                  click={() => {
                    handleShowCongratulatoryModal(false);
                  }}
                />
              </FlexibleDiv>
            )}
          </div>
        </div>
      </div>
    </AddTestimonyFormWrap>
  );
};

export default AddTestimonyForm;
