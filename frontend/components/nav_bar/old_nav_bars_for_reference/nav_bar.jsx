const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../stores/session_store.js');
const SessionActions = require('../actions/session_actions.js');

const LoginButton = require('./user_auth/login/login_button.jsx');
const SignupButton = require('./user_auth/signup/signup_button.jsx');
const LoggedInOptions = require('./user_auth/logged_in_options/logged_in_options.jsx');

const NavBar = React.createClass ({

  getInitialState() {
    return({
      loggedIn: SessionStore.isUserLoggedIn(),
    });
  },

  componentDidMount() {
    this.listener = SessionStore.addListener(this._setLoggedIn);
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  _setLoggedIn() {
    this.setState({
      loggedIn: SessionStore.isUserLoggedIn(),
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

  clonedSiteLink() {
    return(
      <a href="https://www.polleverywhere.com/" className="inspiration">Inspired by Poll Everywhere</a>
    );
  },

  signInAsGuest(e) {
    e.preventDefault();
    SessionActions.logInUser({
      username: "GUEST",
      password: "password"
    });
  },

  loginBasedContent() {
    if (this.state.loggedIn) {
      return (
        <LoggedInOptions/>
      );
    }
    else {
      return (
        <div>
          <button onClick={this.goToRoot} className="nav-bar-logo-not-logged-in-non-home">Pollarity</button>

          <ul className="login-and-signup">
            <li>
              <button className="guest-signin-button" onClick={this.signInAsGuest}>
                Guest login
              </button>
            </li>
            <li><LoginButton/></li>
            <li><SignupButton/></li>
          </ul>

        </div>
      );
    }
  },

  render() {
    return (
      <div className="nav-bar">
        <div className="nav-bar-content-non-home">
          {this.loginBasedContent()}
        </div>
      </div>
    );
  }
});

module.exports = NavBar;
