import React, { Component } from 'react';
import 'react-bootstrap';
import { Route, Switch } from "react-router-dom";
import HomePage from '../../features/home/HomePage';
import Register from '../../features/auth/Register/Register';
import Login from '../../features/auth/Login/Login';
import About from '../../features/about/About';
import ArticleList from '../../features/articles/ArticleList';
import Dashboard from '../../features/userDashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/articles" component={ArticleList} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      </div>
    )
  }
}

export default App;
