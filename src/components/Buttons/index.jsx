import React from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useStyles } from "./button.styles";

export const CustomButton = ({
  to,
  text,
  type,
  variant,
  click,
  loading,
  fullWidth,
  disabled,
  ...otherProps
}) => {
  const classes = useStyles(otherProps);

  return (
    <Button
      href={to}
      type={type}
      onClick={click}
      variant={variant}
      disabled={disabled}
      fullWidth={fullWidth}
      className={classes.button}
    >
      {loading ? <CircularProgress /> : text}
    </Button>
  );
};
