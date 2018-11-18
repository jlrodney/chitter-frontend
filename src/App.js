
import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import PeepsContainer from './components/PeepsContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chitter Challenge!</h1>
        </header>
        <PeepsContainer />
      </div>
    );
  }
}

export default App;
