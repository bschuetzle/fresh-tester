import React, { Component } from 'react';
import './App.css';
import Nav from '../src/components/Nav.js';
import Search from '../src/components/Search.js';
import Guess from '../src/components/Guess.js';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Search />
      </div>
    );
  }
}

export default App;
