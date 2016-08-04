const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../stores/session_store.js');

const LoginButton = require('./user_auth/login/login_button.jsx');
const SignupButton = require('./user_auth/signup/signup_button.jsx');
const LoggedInOptions = require('./user_auth/logged_in_options/logged_in_options.jsx');

const NavBar = React.createClass ({

  getInitialState() {
    return({
      loggedIn: SessionStore.isUserLoggedIn(),
      currentUsername: SessionStore.currentUser()
    });
  },

  componentDidMount() {
    this.listener = SessionStore.addListener(this._setLoggedIn);
  },

  _setLoggedIn() {
    this.setState({
      loggedIn: SessionStore.isUserLoggedIn(),
      currentUsername: SessionStore.currentUser().username
    });
  },

  goToRoot(e) {
    e.preventDefault();
    hashHistory.push("");
  },

  pollarityLogo() {
    return (
      <button onClick={this.goToRoot} className="nav-bar-logo">Pollarity</button>
    );
  },

  seeClonedSite() {
    return(
      <a href="https://www.polleverywhere.com/" className="inspiration">Inspired by Poll Everywhere</a>
    );
  },

  logInOrOut() {
    if (this.state.loggedIn) {
      return (
        <LoggedInOptions/>
      );
    }
    else {
      return (
        <div className="login-and-signup">
          <LoginButton/>
          <SignupButton/>
        </div>
      );
    }
  },

  render() {
    let classnames = "nav-bar";

    return (
      <div className={classnames} id="nav-bar">
        <div className="nav-bar-content">
          {this.pollarityLogo()}
          {this.logInOrOut()}
        </div>
      </div>
    );
  }
});

module.exports = NavBar;
