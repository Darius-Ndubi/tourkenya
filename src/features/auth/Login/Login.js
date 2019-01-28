import React, { Component } from 'react'
import NavBar from '../../nav/navBar/NavBar';

class Login extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="register_form">
        <form>
          <div className="form-group">
            <label for="InputEmail">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="johndoe@email.com" />
          </div>
          <div className="form-group">
            <label for="InputPassword1">Password</label>
            <input type="password" className="form-control" id="InputPassword1" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        </div>
      </div>
    )
  }
}

export default Login;