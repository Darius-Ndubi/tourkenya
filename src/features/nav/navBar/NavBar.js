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
            <li><a href="/">Home</a></li>
            <li><a as={Link} to={"/about"} href="/about">About Us</a></li>
            <li as={Link} to={"/artcles"}><a href="/articles">Articles</a></li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/logout">Logout</a></li>

            <li><a as={Link} to={"/register"} href="/register">Register</a></li>
            <li><a as={Link} to={"/login"}  href="/login"><span>Login</span></a></li>

          </ul>

        </div>
      </div>
    </nav>
      </div>
    )
  }
}


export default NavBar;
