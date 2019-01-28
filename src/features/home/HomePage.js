import React, { Component } from 'react';
import NavBar from '../nav/navBar/NavBar';
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div className="mainbg" >
        <NavBar />
        <div className="jumbotron text-center container homepage_image">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1 >Welcome To Tour Kenya</h1>
          <br />
          <br />

          <p className="lead"> Vast lands, Untouched nature and beautiful animals await your presence.Let's Go!, Find and See them all
          Welcome </p>
            <a as={Link} to={"/register"} href="/register" className="btn btn-primary btn-lg"> Register</a>
            <a as={Link} to={"/login"} href="/login" className="btn btn-success btn-lg">Login</a>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    )
  }
}
