import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import React, { useState, useEffect } from "react";
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
    marginLeft: "auto",
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

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/estimate" && value !== 5) {
      setValue(5);
    }
  },[value]);
  return (
    <React.Fragment>
      <AppBar position="static" color="primary">
        <Toolbar disableGutters>
          <img alt="company logo" src={logo} className={classes.logo} />
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
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
              to="/revolution"
              label="The revolution"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/about"
              label="about us"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/contact"
              label="contact us"
            />
          </Tabs>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
              to="/estimate"
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
