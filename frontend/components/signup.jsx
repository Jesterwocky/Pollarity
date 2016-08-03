const React = require('react');
const ReactDOM = require('react-dom');

const Signup = React.createClass ({


  goToSignup(e) {
    e.preventDefault();
    console.log("Signup Button was clicked!");
  },

  render() {
    return (
      <button onClick={this.goToSignup} className="signup-button">Sign up</button>
    );
  }
});

module.exports = Signup;
