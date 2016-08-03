const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;


const Login = React.createClass ({

  goToLogin(e) {
    e.preventDefault();
    console.log("Login Button was clicked!");
  },

  render() {
    let classnames = "nav-bar-button login-button";

    return (
      <button onClick={this.goToLogin} className={classnames}>Log in</button>
    );
  }
});

module.exports = Login;
