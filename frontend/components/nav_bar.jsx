const React = require('react');
const ReactDOM = require('react-dom');

const Login = require('./login.jsx');
const Logout = require('./logout.jsx');
const Signup = require('./signup.jsx');

const NavBar = React.createClass ({

  pollarityLogo() {
    return (
      <div className="logo">Pollarity - nav bar</div>
    );
  },

  logInOrOut() {
    if (1 === 1) {
      return (
        <div>
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
    return (
      <div className="nav-bar">
        {this.pollarityLogo()}
        {this.logInOrOut()}
      </div>
    );
  }
});

module.exports = NavBar;
