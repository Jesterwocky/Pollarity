const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;

const Login = React.createClass({

  logIn(e) {
    e.preventDefault();
    console.log(`Submitted login form with this info: ${e.currentTarget.value}`);
  },

  render() {
    return(
      <div className="login-box">
        <div className="login-internal-box">
          <form onSubmit={this.logIn}>

            <label for="username-field">Username:</label>
            <input type="text" className="user-auth-field" id="username-field"/>

            <label for="password-field">Password:</label>
            <input type="password" className="user-auth-field" id="password-field"/>

            <input type="submit" className="login-form-button" value="Sign in with my Pollarity account"/>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Login;
