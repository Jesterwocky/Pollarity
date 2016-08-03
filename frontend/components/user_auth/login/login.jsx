const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;

const Login = React.createClass({
  getInitialState() {
    return ({
      username: "",
      password: ""
    });
  },

  componentDidMount() {

  },

  logIn(e) {
    e.preventDefault();
    console.log("Login will happen!");
    hashHistory.push("");
  },

  render() {
    let loginPageClasses = "login-page group";

    return(
      <div className={loginPageClasses}>
        <div className="login-box">
          <form className="login-internal-box" onSubmit={this.logIn}>

            <label>Username</label>
            <input type="text" className="user-auth-field" id="username-field"/>

            <label>Password</label>
            <input type="password" className="user-auth-field" id="password-field"/>

            <input type="submit" className="login-form-button" value="Sign in with my Pollarity account"/>

          </form>
        </div>
      </div>
    );
  }
});

module.exports = Login;
