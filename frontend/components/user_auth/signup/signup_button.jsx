const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;


const SignupButton = React.createClass ({

  goToSignup(e) {
    e.preventDefault();
    console.log("Signup Button was clicked!");
    hashHistory.push("users/new");
  },

  render() {
    let classnames = "nav-bar-button signup-button";

    return (
      <button onClick={this.goToSignup} className={classnames}>Sign up</button>
    );
  }
});

module.exports = SignupButton;
