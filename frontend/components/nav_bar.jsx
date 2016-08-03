const React = require('react');
const ReactDOM = require('react-dom');

const Login = require('./login.jsx');
const Logout = require('./logout.jsx');
const Signup = require('./signup.jsx');

const NavBar = React.createClass ({

  pollarityLogo() {
    return (
      <p className="nav-bar-logo">Pollarity - nav bar</p>
    );
  },

  logInOrOut() {
    if (1 === 1) {
      return (
        <div className="login-and-signup">
          <Login/>
          <Signup/>
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
