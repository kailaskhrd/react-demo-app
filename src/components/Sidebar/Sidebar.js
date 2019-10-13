import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Sidebar.css';

import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';

class Sidebar extends Component {
  render() {
    return (
      <Router>
        <div className="main-sidebar">
          <nav className="navbar navbar-expand-md navbar-dark">
          <ul className="sidebar-menu menu-open">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
        </div>

        <div className="content">
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Sidebar;
