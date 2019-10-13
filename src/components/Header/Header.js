import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark App-header">
        <div className="container">
          <div className="col-lg-4"><img src={logo} className="App-logo" alt="logo" /></div>
          <div className="col-lg-1">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="col-lg-7"> React Js Demo App</div>
        </div>
      </nav>
    );
  }
}

export default Header;
