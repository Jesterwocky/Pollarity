const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../stores/session_store.js');

const LoginButton = require('./user_auth/login/login_button.jsx');
const Logout = require('./user_auth/logout.jsx');
const SignupButton = require('./user_auth/signup/signup_button.jsx');

const NavBar = React.createClass ({

  getInitialState() {
    console.log("Getting initial navbar state");
    console.log(`Current user is ... ${SessionStore.currentUser().username}`);
    return({
      loggedIn: SessionStore.isUserLoggedIn(),
      loggedInUser: SessionStore.currentUser().username
    });
  },

  componentDidMount() {
    this.listener = SessionStore.addListener(this._setLoggedIn);
  },

  _setLoggedIn() {
    this.setState({
      loggedIn: SessionStore.isUserLoggedIn(),
      loggedInUser: SessionStore.currentUser().username
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
        <ul className="logout-and-username">
          <li>
            <Logout/>
          </li>

          <li className="nav-bar-username">
            {this.state.loggedInUser}
          </li>
        </ul>
      );

    }
    else {
      return (
        <div className="login-and-signup">
          <LoginButton/>
          <SignupButton/>
          <div>{undefined}</div>
        </div>
      );
    }
  },

  render() {
    let classnames = "nav-bar group";

    return (
      <div className={classnames}>
        {this.pollarityLogo()}
        {this.logInOrOut()}
      </div>
    );
  }
});

module.exports = NavBar;
