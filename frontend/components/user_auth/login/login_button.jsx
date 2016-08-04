const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;


const LoginButton = React.createClass ({

  goToLogin(e) {
    e.preventDefault();
    hashHistory.push("login");
  },

  render() {
    let classnames = "nav-bar-button login-button";

    return (
      <button onClick={this.goToLogin} className={classnames}>Log in</button>
    );
  }
});

module.exports = LoginButton;
