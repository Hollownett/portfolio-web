import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../avatar.png";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import PaerticleComponent from "./PaerticleComponent";

//CSS
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },

  subTitle: {
    color: "tan",
    marginBottom: "3em",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) ",
    width: "99vw",
    textAlign: "center",
    zIndex: 1,
  },
  langContainer: {
    position: "absolute",
    bottom: "100%",
    right: "100%",
  },
  particleContainer: {
    top: "90%",
    left: "100%",
  },
}));

function Header() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Box className={classes.langContainer}></Box>
      <div>
        <PaerticleComponent />
      </div>
      <Box className={classes.typedContainer}>
        <Grid container justify="center">
          <Avatar className={classes.avatar} src={avatar} alt="Konstantin" />
        </Grid>
        <Typography className={classes.title} variant="h4">
          {t("header.title")}
        </Typography>
        <br />
        <Typography className={classes.subTitle} variant="h4">
          <Typed
            strings={[t("header.subtitle1"), t("header.subtitle2")]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </Typography>
      </Box>
    </>
  );
}

export default Header;
