const React = require('react');
const ReactDOM = require('react-dom');

const Login = React.createClass ({

  goToLogin(e) {
    e.preventDefault();
    console.log("Login Button was clicked!");
  },

  render() {
    return (
      <button onClick={this.goToLogin} className="login-button">Log in</button>
    );
  }
});

module.exports = Login;
