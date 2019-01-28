import React, { Component } from 'react'
import NavBar from '../../nav/navBar/NavBar';

class Register extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="register_form">
        <form>
          <div className="form-group">
            <label for="InputEmail">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="johndoe@email.com" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="InputUsername">Username</label>
            <input type="text" className="form-control" id="InputUsername" aria-describedby="usernameHelp" placeholder="john the don" />
          </div>
          <div className="form-group">
            <label for="InputPassword1">Password</label>
            <input type="password" className="form-control" id="InputPassword1" placeholder="Password" />
          </div>
          <div className="form-group">
            <label for="InputPassword1">Confirm Password</label>
            <input type="password" className="form-control" id="InputPassword2" placeholder="Re-Enter Password" />
          </div>
          <button type="submit" className="btn btn-primary">Join Tour Kenya</button> 
        </form>
        </div>
      </div>
    )
  }
}

export default Register;
