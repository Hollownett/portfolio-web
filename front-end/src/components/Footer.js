import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "$:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <BottomNavigation width="auto" style={{ background: "#222" }}>
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: "0" }}
          icon={<GitHubIcon />}
          href="https://github.com/Hollownett"
          target="_blanck"
        />
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: "0" }}
          icon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/konstantin-akutsionak-841440195/"
          target="_blanck"
        />
        {/* https://t.me/hollownet */}
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: "0" }}
          icon={<TelegramIcon />}
          href="https://t.me/hollownet"
          target="_blanck"
        />
      </BottomNavigation>
    </div>
  );
};

export default Footer;
