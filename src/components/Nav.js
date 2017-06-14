import React, { Component } from 'react';
import logo from '../logo1.png';

class Nav extends Component {
  render() {
    return (
      <div className="Navbar">
          <img className="Logo" src={logo} alt="logo"/>
          <h2 className="NavTitle">FreshTest</h2>
      </div>
    );
  }
}

export default Nav;
