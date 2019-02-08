import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/">
            Home
            </Link></li>
            <li><Link to="/about">
            About Us
            </Link></li>
            <li><Link to="/articles">
            Articles
            </Link></li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
              <li><Link to="/dashboard">
              Dashboard
            </Link></li>
            <li><Link to="/register">
            Register
            </Link></li>
            <li><Link to="/login">
            Login
            </Link></li>

          </ul>

        </div>
      </div>
    </nav>
      </div>
    )
  }
}


export default NavBar;
