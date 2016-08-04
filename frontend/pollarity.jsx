const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const Home = require('./components/home.jsx');
const NavBar = require('./components/nav_bar.jsx');
const Signup = require('./components/user_auth/signup/signup.jsx');
const Login = require('./components/user_auth/login/login.jsx');
const UserSettings = require('./components/user_auth/logged_in_options/logged_in_options.jsx');
const SessionActions = require('./actions/session_actions.js');
const CreateAccount = require('./components/user_auth/signup/create_account.jsx');


const SessionApiUtil = require('./util/session_api_util.js');
window.SessionApiUtil = SessionApiUtil;
const SessionStore = require('./stores/session_store.js');
window.SessionStore = SessionStore;

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
    <Route path="users/new/create-account" component={CreateAccount}/>
    <Route path="login" component={Login}/>
    <Route path="settings" component={UserSettings}/>
  </Route>
);

const retrieveUser = function() {
  debugger
  if (window.currentUser !== undefined) {
    SessionActions.receiveCurrentUser(window.currentUser["user"]);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  retrieveUser();

  ReactDOM.render((
    <Router history={hashHistory}>
      {routes}
    </Router>
    ), document.getElementById("root")
  );
});
