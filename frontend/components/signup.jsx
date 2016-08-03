const React = require('react');
const ReactDOM = require('react-dom');

const Signup = React.createClass ({


  goToSignup(e) {
    e.preventDefault();
    console.log("Signup Button was clicked!");
  },

  render() {
    let classnames = "nav-bar-button signup-button";

    return (
      <button onClick={this.goToSignup} className={classnames}>Sign up</button>
    );
  }
});

module.exports = Signup;
