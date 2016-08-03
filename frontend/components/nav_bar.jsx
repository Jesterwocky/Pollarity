const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;

const LoginButton = require('./user_auth/login/login_button.jsx');
const Logout = require('./user_auth/logout.jsx');
const SignupButton = require('./user_auth/signup/signup_button.jsx');

const NavBar = React.createClass ({

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
    if (1 === 1) {
      return (
        <div className="login-and-signup">
          <LoginButton/>
          <SignupButton/>
        </div>
      );
    }
    else {
      return (
        <Logout/>
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
