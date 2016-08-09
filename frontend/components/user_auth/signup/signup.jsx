const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../../../stores/session_store.js');

const Signup = React.createClass({

  componentDidMount() {
    this.listener = SessionStore.addListener(this._onSessionChange);
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  _onSessionChange() {
    if (SessionStore.isUserLoggedIn) {
      hashHistory.push(`users/${SessionStore.currentUser().id}/surveys`);
    }
  },

  goToCreateAccount(e) {
    hashHistory.push("users/new/create-account");
  },

  render() {
    let loginPageClasses = "signup-page group";

    return (
      <div className={loginPageClasses}>
        <h1>Choose your primary use</h1>

        <ul className="usage-options">
          <li onClick={this.goToCreateAccount}>
            <div className="usage-icon">Image</div>
            <h2>You're participating</h2>
            <p>Select this if you'll mostly respond to other people's polls.</p>
          </li>

          <li onClick={this.goToCreateAccount}>
            <div className="usage-icon">Image</div>
            <h2>You're presenting</h2>
            <p>Select this if you'll mostly create polls for others to respond to.</p>
          </li>
        </ul>
        <aside>Whichever you choose, you'll still be able to access all of Pollarity.</aside>

      </div>
    );
  }

});

module.exports = Signup;
