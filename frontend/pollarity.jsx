const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const Home = require('./components/home.jsx');
const NavBar = require('./components/nav_bar.jsx');
const Signup = require('./components/user_auth/signup/signup.jsx');
const Login = require('./components/user_auth/login/login.jsx');

const App = React.createClass({
  render() {
    return (
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
});

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="users/new" component={Signup}/>
    <Route path="login" component={Login}/>
  </Route>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render((
    <Router history={hashHistory}>
      {routes}
    </Router>
    ), document.getElementById("root")
  );
});
