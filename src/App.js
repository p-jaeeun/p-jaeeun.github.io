import React, { Component } from "react";
import Header from "components/Header copyy";
import Footer from "components/Footer";
import Router from "routes/Router";
import "assets/css/style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
