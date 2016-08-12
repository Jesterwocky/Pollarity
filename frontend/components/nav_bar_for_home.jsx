const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../stores/session_store.js');
const SessionActions = require('../actions/session_actions.js');

const LoginButton = require('./user_auth/login/login_button.jsx');
const SignupButton = require('./user_auth/signup/signup_button.jsx');
const LoggedInOptions = require('./user_auth/logged_in_options/logged_in_options_for_home.jsx');

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

  loginBasedContent() {
    if (this.state.loggedIn) {
      return (
        <LoggedInOptions/>
      );
    }
    else {
      return (
        <ul className="login-and-signup">
          <li>
            <button className="guest-signin-button" onClick={this.signInAsGuest}>
              Be our guest
            </button>
          </li>
          <li><LoginButton/></li>
          <li><SignupButton/></li>
        </ul>
      );
    }
  },

  signInAsGuest() {
    SessionActions.logInUser({
      username: "GUEST",
      password: "password"
    });
  },

  render() {

    return (
      <div className="nav-bar-for-home">
        <div className={"nav-bar-content group"}>
            <button onClick={this.goToRoot} className="nav-bar-logo-not-logged-in">Pollarity</button>
            <div className="inspiration">
              <a href="https://www.polleverywhere.com/">An homage to Poll Everywhere</a>
            </div>

            {this.loginBasedContent()}
        </div>
      </div>
    );
  }
});

module.exports = NavBar;
