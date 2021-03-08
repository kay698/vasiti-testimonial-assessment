import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: (props) => (props.capitalize ? "capitalize" : ""),
    backgroundColor: (props) => (props.bngColor ? props.bngColor : "rgb(250, 116, 7)"),
    borderRadius: (props) => (props.radius ? props.radius : "0.3rem"),
    color: (props) => (props.color ? props.color : "#FEFEFE"),
    // fontWeight: "bold",
    padding: (props) => (props.sm ? "0.3rem 1rem" : "0.432rem 1.8rem"),
    height: (props) => (props.sm ? "auto" : "4rem"),
    width: (props) => (props.sm ? "" : "14rem"),
    fontSize: (props) => (props.sm ? "0.5" : "0.85rem"),
    letterSpacing : "0px",

    "&:hover": {
      backgroundColor: (props) => (props.bngColor ? props.bngColor : "rgb(250, 116, 10)"),
      color: (props) => (props.color ? props.color : "#FEFEFE"),
      opacity: 0.87,
    },

    "&.MuiButton-root.Mui-disabled": {
      color: "#a59fa8",
      backgroundColor: "#998d8d70",
    },

    "& .MuiCircularProgress-indeterminate": {
      height: "20px !important",
      width: "20px !important",
      color: (props) => (props.color ? props.color : "#FEFEFE"),
    },

    "&.MuiButton-outlined": {
      color: (props) => (props.color ? props.color : "#FEFEFE"),
      border: "1px solid #c8c8c8",
    },
  },
}));
