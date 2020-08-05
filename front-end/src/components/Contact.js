import React from "react";
import Navbar from "./Navbar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import axios from "axios";
import { useTranslation } from "react-i18next";

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "& .Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    margin: "1rem 0",
    color: "tomato",
    borderColor: "tomato",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    axios({
      method: "POST",
      url: "http://localhost:3002/contact",
      data: {
        name: name,
        email: email,
        message: message,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        document.getElementById("contact-form").reset();
      } else if (response.data.msg === "fail") {
        alert("Fail sent messsage");
      }
    });
  };

  return (
    <>
      <Box
        component="div"
        style={{
          background: "#233",
          height: "100vh",
        }}
      >
        <Navbar />
        <Grid container justify="center">
          <Box
            id="contact-form"
            component="form"
            className={classes.form}
            onSubmit={handleSubmit}
            method="POST"
          >
            <Typography
              variant="h5"
              style={{
                color: "tomato",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              {t("contact.titleForm")}
            </Typography>
            <InputField
              id="name"
              fullWidth={true}
              label={t("contact.name")}
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
            />
            <br />
            <InputField
              id="email"
              fullWidth={true}
              label={t("contact.email")}
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
            />
            <br />
            <InputField
              id="message"
              fullWidth={true}
              label={t("contact.message")}
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
            />
            <br />
            <Button
              className={classes.button}
              type="submit"
              variant="outlined"
              fullWidth={true}
              endIcon={<SendIcon />}
            >
              {t("contact.submitButton")}
            </Button>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
