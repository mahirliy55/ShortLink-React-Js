import React, { Component } from "react";
import "././scss/style.scss";
import "./scss/reset.scss";
import Navbar from "./Components/NavBar/Navbar";
import Info from "./Components/Info/Info";
import Shrtcode from "./Components/Shrtcode/Shrtcode";
import Advance from "./Components/Advance/Advance";
import Cards from "./Components/Cards/Cards";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  state = {
    registerForm: false,
    login: false,
    burger: false,
  };
  burgerFunc = () => {
    this.setState({ burger: !this.state.burger });
  };
  showRegisterForm = () => {
    this.setState({
      registerForm: !this.state.registerForm,
    });
  };
  showLoginForm = () => {
    this.setState({
      login: !this.state.login,
      registerForm: false,
    });
  };
  render() {
    return (
      <>
        <Navbar
          signupModal={this.showRegisterForm}
          deyerQaytaran={this.state.registerForm}
          loginModal={this.showLoginForm}
          deyerQaytaran2={this.state.login}
          burger={this.burgerFunc}
          burgerStatus={this.state.burger}
        />
        <Info />
        <Shrtcode />
        <Advance />
        <Cards />
        <Jumbotron />
        <Footer />
      </>
    );
  }
}

export default App;
