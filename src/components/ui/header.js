import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import React, { useState, useEffect, Fragment } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import makeStyles from "@mui/styles/makeStyles";
import logo from "../../assets/logo.svg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/styles";

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
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")] : {
     marginBottom: "2em"
    },
    [theme.breakpoints.down("xs")]:{
      marginBottom: "1em"
    }
  },
  logo: {
    height: "5em",
    [theme.breakpoints.down("md")] : {
      height: "3em"
    },
    [theme.breakpoints.down("xs")]:{
      height: "1em"
    }
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
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
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
  }, [value]);

  const tabs = (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="white"
        className={classes.tabContainer}
      >
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
        <Tab
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          className={classes.tab}
          component={Link}
          onMouseOver={(event) => handleClick(event)}
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
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
      >
        {" "}
        <MenuItem
          onClick={() => {
            handleClose();
            setValue(1);
          }}
          component={Link}
          to="/services"
        >
          Services
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            setValue(1);
          }}
          component={Link}
          to="/customsoftware"
        >
          Custom Software Development
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/mobileapps">
          Mobile App Development
        </MenuItem>
        <MenuItem onClick={handleClose}>Website Development</MenuItem>
      </Menu>
    </Fragment>
  );
  return (
    <React.Fragment>
      <AppBar position="static" color="primary">
        <Toolbar disableGutters>
          <Button component={Link}
          to="/"
          disableRipple
          onClick={() => setValue(0)}
          className={classes.logoContainer}
          >
          <img alt="company logo" src={logo} className={classes.logo} />
          </Button>
          {matches ? null : tabs}
        </Toolbar>
      </AppBar>

      <Outlet />
    </React.Fragment>
  );
}
