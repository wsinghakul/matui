import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import makeStyles from "@mui/styles/makeStyles"
import { theme } from "./theme";
import logo from '../../assets/logo.svg'

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

const useStypes = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo: {
    height:"7em"
  }
}))

export default function Header(props) {
  const classes = useStypes();
  return (
    <React.Fragment>
       <ElevationScroll>
      <AppBar position="fixed" color="primary">
        <Toolbar disableGutters>
          <img alt="company logo" src={logo} className={classes.logo} />
         </Toolbar>
      </AppBar>
    </ElevationScroll>
    <div className={classes.toolbarMargin} />
    </React.Fragment>
   
  );
}
