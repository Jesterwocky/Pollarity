const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;

const SessionStore = require('../../../stores/session_store.js');
const SessionActions = require('../../../actions/session_actions.js');
const hashHistory = require('react-router').hashHistory;

const Login = React.createClass({
  getInitialState() {
    return ({
      username: "",
      password: ""
    });
  },

  grabUsername(e) {
    this.setState({
      username: e.currentTarget.value
    });
  },

  grabPassword(e) {
    this.setState({
      password: e.currentTarget.value
    });
  },

  logIn(e) {
    e.preventDefault();
    console.log("Login will happen!");
    SessionActions.logInUser({
      user: {
        username: this.state.username,
        password: this.state.password
      }
    });
    hashHistory.push("");
  },

  render() {
    let loginPageClasses = "login-page group";

    return(
      <div className={loginPageClasses}>
        <div className="login-header">
          <Link to={''}>Pollarity</Link>
        </div>

        <div className="login-box">
          <div className="login-internal-box">

            <h1>Log In</h1>
            <form onSubmit={this.logIn}>

              <label>Username</label>
              <input onChange={this.grabUsername} type="text" className="user-auth-field" id="username-field"/>

              <label>Password</label>
              <input onChange={this.grabPassword} type="password" className="user-auth-field" id="password-field"/>

              <input type="submit" className="login-form-button" value="Sign in with my Pollarity account"/>

          </form>

            <div className="no-account-box">
              <Link to={'/users/new'} className="new-account-link">
                Do you need an account? Create one in a few seconds.
              </Link>
            </div>

          </div>
        </div>

      </div>
    );
  }
});

module.exports = Login;
