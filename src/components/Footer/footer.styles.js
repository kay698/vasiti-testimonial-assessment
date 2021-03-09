import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  footerGrid: {
    backgroundColor: "#25201D",
    height: "auto",
    padding: "1rem 2rem",
    flexDirection: "column",
    justifyContent: "center",
    color: "#F3F3F3 !important",

    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  linksWrap: {
    display: "flex",
    margin: "4.23rem 0 2rem",
    padding: "0 7rem",
    justifyContent: "space-between",
    alignItems: "start",


    // footer link items with media query
    "& a": {
      color: "#F3F3F3",
      textDecoration: "none",
      fontSize:"14px",
      lineHeight:"16.41px",
      fontWeight:"400",

      "&:hover": {
        color: "#bbb",
      },

      "@media (max-width: 510px)" : {
        fontSize: "12px",
        margin: "0",
      },
    },


    //media query for links body
    "@media (max-width: 1110px)": {
      padding: "0.5rem 3rem",
    },
    "@media (max-width: 980px)": {
      padding: "0.5rem 1rem",
    },
    "@media (max-width: 970px)": {
      padding: "0 2rem",
      flexWrap: "wrap",

      "& .MuiGrid-item": {
        width: "50%",
        marginBottom: "3rem",
      },
    },
    "@media (max-width: 600px)": {
      padding: "0 2rem",
      flexWrap: "wrap",

      "& .MuiGrid-item": {
        width: "50%",
        marginBottom: "3rem",
      },
    },
    "@media (max-width: 380px)": {
      padding: "0 2rem",
      flexWrap: "wrap",

      "& .MuiGrid-item": {
        width: "max-content",
        minWidth:"40%",
        marginBottom: "3rem",
      },
    },

    

    //  Headers (H6)
    "& h6": {
      textTransform: "uppercase",
      fontWeight: 600,
      fontSize: "1.05rem",
    },

    //  Grid items
    "& .MuiMenuItem-root": {
      padding: "0.5rem 0",
      color: "#919191",

      "&:hover": {
        color: "#FCFCFC",
      },
    },
  },


  // socia media icons section
  socials: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 0",
    width: "140px",
    margin: "15px 0 30px 0",

    "& button": {
      padding: "6px",
      backgroundColor: "white",
      mariginRight: "10px !important",

      "&:hover": {
        backgroundColor: "#ddd",
      },
    },
    "& svg": {
      color: "#25201D",
      fontSize: "16px",
    },
  },
  socialsHeader: {
    "@media (max-width: 600px)": {
      minWidth: "400px !important",
    },
  },
}));
