const React = require('react');
const ReactDOM = require('react-dom');
const LoginButton = require('../../user_auth/login/login_button.jsx');
const SignupButton = require('../../user_auth/signup/signup_button.jsx');
const SessionActions = require('../../../actions/session_actions.js');

const LoginAndSignup = React.createClass ({
   signInAsGuest(e) {
     e.preventDefault();
     SessionActions.logInUser({
       username: "GUEST",
       password: "password"
     });
   },

  render() {
    return (
      <ul className="login-and-signup">
        <li>
          <button className="guest-signin-button" onClick={this.signInAsGuest}>
            Guest login
          </button>
        </li>
        <li><LoginButton/></li>
        <li><SignupButton/></li>
      </ul>
    );
  }
});
