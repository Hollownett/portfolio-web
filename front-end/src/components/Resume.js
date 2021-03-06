import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },

  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1 rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "$:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "$:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },
}));

const Resume = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <Box className={classes.mainContainer} component="header">
        <Typography variant="h4" align="center" className={classes.heading}>
          {t("resume.header")}
        </Typography>
        {/* HardSkils */}
        <Box className={classes.timeLine} component="div">
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            {t("resume.hardSkills")}
          </Typography>
          {/* FrontEnd */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              Front-End
            </Typography>

            <Typography variant="body1" style={{ color: "tomato" }}>
              HTML/CSS, ES5, ES6, React, Redux
            </Typography>
            {/* <Typography variant="subtitle1" style={{ color: "tan" }}>
              Lorem isdadsadsd da asdasdasdas dasd ads das dasd asd as dasd as
              dasd sda ds ads da dasdads das dadadasd asdasd a asd ad sda dsad
              ad sa dad sda
            </Typography> */}
          </Box>
          {/* BackEnd */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              Back-End
            </Typography>

            <Typography variant="body1" style={{ color: "tomato" }}>
              NodeJS, Express, Phyton, Django, MongoDB, PostgreSQL, mySQL,
              Firebase
            </Typography>
            {/* <Typography variant="subtitle1" style={{ color: "tan" }}>
              Lorem isdadsadsd da asdasdasdas dasd ads das dasd asd as dasd as
              dasd sda ds ads da dasdads das dadadasd asdasd a asd ad sda dsad
              ad sa dad sda
            </Typography> */}
          </Box>
          {/* Contol systems */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              {t("resume.contolSystems")}
            </Typography>

            <Typography variant="body1" style={{ color: "tomato" }}>
              Git
            </Typography>
            {/* <Typography variant="subtitle1" style={{ color: "tan" }}>
              Lorem isdadsadsd da asdasdasdas dasd ads das dasd asd as dasd as
              dasd sda ds ads da dasdads das dadadasd asdasd a asd ad sda dsad
              ad sa dad sda
            </Typography> */}
          </Box>
        </Box>
        {/* SoftSkils */}
        <Box className={classes.timeLine} component="div">
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            {t("resume.softSkills")}
          </Typography>
          {/* English */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              {t("resume.english")}
            </Typography>

            <Typography variant="body1" style={{ color: "tomato" }}>
              Intermidiate
            </Typography>
            {/* <Typography variant="subtitle1" style={{ color: "tan" }}>
              asdasdsa s asda sd asd
            </Typography> */}
          </Box>
          {/* Sociability  */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              {t("resume.sociability")}
            </Typography>

            <Typography variant="body1" style={{ color: "tomato" }}>
              {t("resume.sociabilityDesc")}
            </Typography>
            {/* <Typography variant="subtitle1" style={{ color: "tan" }}>
              asdasdsa s asda sd asd
            </Typography> */}
          </Box>
          {/* Stay focused on task */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              {t("resume.stayFocusedOnTask")}
            </Typography>

            <Typography variant="body1" style={{ color: "tomato" }}>
              {t("resume.stayFocusedOnTaskDesc")}
            </Typography>
            {/* <Typography variant="subtitle1" style={{ color: "tan" }}>
              asdasdsa s asda sd asd
            </Typography> */}
          </Box>
          {/* Desire to grow as specialist */}
          <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" className={classes.subHeading}>
              {t("resume.desireToGrowAsSpecialist")}
            </Typography>

            <Typography variant="body1" style={{ color: "tomato" }}>
              {t("resume.desireToGrowAsSpecialistDesc")}
            </Typography>
            {/* <Typography variant="subtitle1" style={{ color: "tan" }}>
              asdasdsa s asda sd asd
            </Typography> */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
