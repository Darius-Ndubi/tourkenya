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
          <a className="navbar-brand" href="/cover">Tour Destinations</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><a><Link to="/">
            Home
            </Link></a></li>
            <li><a><Link to="/about">
            About Us
            </Link></a></li>
            <li><a><Link to="/articles">
            Articles
            </Link></a> </li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
              <li><a><Link to="/dashboard">
              Dashboard
            </Link></a></li>
              <li><a><Link to="/logout">
              Logout
            </Link></a></li>

            <li><a><Link to="/register">
            Register
            </Link></a></li>
            <li><a><span><Link to="/login">
            Login
            </Link></span></a></li>

          </ul>

        </div>
      </div>
    </nav>
      </div>
    )
  }
}


export default NavBar;
