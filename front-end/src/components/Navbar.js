import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  IconButton,
  Box,
} from "@material-ui/core";
import { AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import { useTranslation } from "react-i18next";
import LangChangeButton from "./LangChangeButton";
//CSS
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "black",
    margin: "0.5rem auto",
    height: theme.spacing(13),
    width: theme.spacing(13),
  },
  listIcon: {
    color: "tan",
  },
  root: {
    width: "100%",
    maxWidth: 150,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "navbar.sideMenu.home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "navbar.sideMenu.resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "navbar.portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "navbar.sideMenu.contacts",
    listPath: "/contact",
  },
];

function Navbar() {
  const classes = useStyles();
  const { t } = useTranslation();

  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const slideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Konstantin" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listIcon}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText primary={t(lsItem.listText)} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <LangChangeButton />
            <Typography
              variant="h5"
              style={{ color: "tan", marginInlineStart: "auto" }}
            >
              {t("navbar.portfolio")}
            </Typography>
            <IconButton onClick={toggleSlider("right", true)}>
              <MenuOpenIcon
                style={{
                  color: "tomato",
                  fontSize: "36px",
                  marginInlineEnd: "auto",
                }}
              />
            </IconButton>
            <MobilRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {slideList("right")}
              <Footer />
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
