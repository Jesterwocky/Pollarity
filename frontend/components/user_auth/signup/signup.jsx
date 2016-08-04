const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;

const Signup = React.createClass({

  render() {
    let loginPageClasses = "signup-page group";

    return (
      <div className={loginPageClasses}>
        <h1>Choose your primary use</h1>

        <ul className="usage-options">
          <li>
            <div className="usage-icon">Image</div>
            <h2>You're participating</h2>
            <p>Select this if you'll mostly respond to other people's polls.</p>
          </li>

          <li>
            <div className="usage-icon">Image</div>
            <h2>You're presenting</h2>
            <p>Select this if you'll mostly create polls for others to respond to.</p>
          </li>
        </ul>

      </div>
    );
  }

});

module.exports = Signup;
