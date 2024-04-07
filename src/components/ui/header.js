import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import React, { useState } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import makeStyles from "@mui/styles/makeStyles";
import logo from "../../assets/logo.svg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";

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

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "5em",
  },
  tabContainer: {
    marginLeft: "50px",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "50px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  };
  return (
    <React.Fragment>
      <AppBar position="static" color="primary">
        <Toolbar disableGutters>
          <img alt="company logo" src={logo} className={classes.logo} />
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="white"
            className={classes.tabContainer}
          >
            <Tab className={classes.tab} component={Link} to="/" label="Home" />
            <Tab
              className={classes.tab}
              component={Link}
              to="/services"
              label="Services"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/therevolution"
              label="The revolution"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/aboutus"
              label="about us"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/contactus"
              label="contact us"
            />
          </Tabs>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Free Estimate
          </Button>
        </Toolbar>
      </AppBar>

      <Outlet />
    </React.Fragment>
  );
}
