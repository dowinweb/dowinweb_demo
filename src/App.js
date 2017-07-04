import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title.js';
import Dog from './Dog.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello React</h2>
          <Dog />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Title />
        </p>
      </div>
    );
  }
}

export default App;
