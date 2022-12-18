import React, { Component } from "react";
import fakeWeatherData from "./fakeWeatherData.json";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "mahmoud"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
            <Header />
            <Content />
     </div>
    );
  }
}

export default App;
