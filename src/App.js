import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";
import Lamp from "./Lamp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: props.on
    };
  }
    handleClick = () => {
      this.setState({ on: !this.state.on });
    };
  render() {
    const working = this.state.on ? 'work' : 'notWork';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={working} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button onClick={this.handleClick}>
          
        </button>
        <Lamp />
        <Lamp />
        <Quotes />

      </div>
    );
  }
}

export default App;
