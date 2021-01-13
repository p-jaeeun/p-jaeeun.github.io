import React, { Component } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import Router from "routes/Router";
import "assets/css/style.css";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router />
        <Footer />
      </>
    );
  }
}

export default App;
