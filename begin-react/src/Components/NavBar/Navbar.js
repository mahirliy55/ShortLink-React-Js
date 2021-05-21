import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const Navbar = ({
  signupModal,
  deyerQaytaran,
  loginModal,
  deyerQaytaran2,
  burger,
  burgerStatus,
}) => {
  const classes = useStyles();
  return (
    <section className="navbar">
      <nav
        className={`nav ${deyerQaytaran || deyerQaytaran2 ? "openModal" : ""}`}
      >
        <div className="container">
          <div className="title">
            <div className="mobile">
              <div className="title__ham">
                <a href="#" className="logo">
                  Shortly
                </a>
              </div>
            </div>
      
            <div className="hamburger__menu" onClick={burger}>
              <MenuIcon />
            </div>
            

            <div className="title__left">
              <ul>
                <a href="#" className="logo">
                  Shortly
                </a>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
              </ul>
            </div>
            <div className="title__right">
              <a href="#" onClick={loginModal}>
                Login
              </a>
              <a href="#" className="signup" onClick={signupModal}>
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>
      {<div className={`hamburger ${burgerStatus ? "active": ""}`}>
                <ul>
                  <li>
                    <a href="">Features</a>
                  </li>
                  <li>
                    <a href="">Pricing</a>
                  </li>
                  <li className="liRes">
                    <a href="">Resources</a>
                  </li>
                  <li>
                    <a href="">Login</a>
                  </li>
                  <li className="signUp">
                    <a href="">Sign Up</a>
                  </li>
                </ul>
              </div>}
      {deyerQaytaran ? (
        <form className={`form ${classes.root}`} noValidate autoComplete="off">
          <TextField
            label="First Name"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            style={{ width: 270 }}
          />
          <TextField
            label="Last Name"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            style={{ width: 270 }}
          />
          <TextField
            label="Email"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            style={{ width: 270 }}
          />
          <TextField
            label="Password"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            style={{ width: 270 }}
          />
          <TextField
            label="Password Confirm"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            style={{ width: 270 }}
          />
          <Button
            type="submit"
            variant="contained"
            size="small"
            color="primary"
            className={classes.margin}
            onClick={signupModal}
          >
            Register
          </Button>
          <button className="exit" onClick={signupModal}>
            X
          </button>
        </form>
      ) : (
        ""
      )}
      {deyerQaytaran2 ? (
        <form className={`form ${classes.root}`} noValidate autoComplete="off">
          <TextField
            label="Email"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            style={{ width: 270 }}
          />
          <TextField
            label="Password"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            style={{ width: 270 }}
          />
          <Button
            type="submit"
            variant="contained"
            size="small"
            color="primary"
            className={classes.margin}
            onClick={loginModal}
          >
            Login
          </Button>
          <button className="exit" onClick={loginModal}>
            X
          </button>
        </form>
      ) : (
        ""
      )}
    </section>
  );
};

export default Navbar;
