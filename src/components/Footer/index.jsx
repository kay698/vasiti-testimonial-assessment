import React from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Typography from "@material-ui/core/Typography";
import { FooterNavItems } from "../../helpers/footerNavItems";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import { useStyles } from "./footer.styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.footerGrid}>
        <Grid className={classes.linksWrap}>
          {FooterNavItems.map((list, index) => (
            <Grid item key={index}>
              <Typography variant={"h6"}>{list.header}</Typography>
              <MenuList>
                {list.items.map((item, idx) => (
                  <MenuItem key={idx}>
                    <a>{item}</a>
                  </MenuItem>
                ))}
              </MenuList>
            </Grid>
          ))}
          <Grid item>
            <Typography variant={"h6"} clasclassName={classes.socialsHeader}>Join Our Community</Typography>
            <section className={classes.socials}>
              <a href="/" target={"_blank"}>
                <IconButton>
                  <FacebookIcon />
                </IconButton>
              </a>
              <a href="/" target={"_blank"}>
                <IconButton>
                  <InstagramIcon />
                </IconButton>
              </a>
              <a href="/" target={"_blank"}>
                <IconButton>
                  <TwitterIcon />
                </IconButton>
              </a>
              <a href="/" target={"_blank"}>
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
              </a>
            </section>
            <Typography>Email Newsletter</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
