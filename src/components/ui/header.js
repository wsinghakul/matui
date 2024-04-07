import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import makeStyles from "@mui/styles/makeStyles";
import logo from "../../assets/logo.svg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { themes } from "./theme";
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(themes => ({
  logo: {
    height: "7em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...themes.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <img alt="company logo" src={logo} className={classes.logo} />
            <Tabs className="classes.tabContainer">
              <Tab className="classes.tab" label="Home" />
              <Tab className="classes.tab" label="Services" />
              <Tab className="classes.tab" label="The revolution" />
              <Tab className="classes.tab" label="about us" />
              <Tab className="classes.tab" label="contact us" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
