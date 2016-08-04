const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../../../stores/session_store.js');
const SessionActions = require('../../../actions/session_actions.js');


const LoggedInOptions = React.createClass({

  logOut(e) {
    e.preventDefault();
    SessionActions.logOut();
  },

  goToSettings(e) {
    e.preventDefault();
    hashHistory.push("settings");
  },

  render() {
    return (
      <div id="logged-in-options">
        <a href="">This should be this.props.currentUser!</a>
        <ul className="hidden">
          <li>
            <a href="" className="user-option" onClick={this.logOut}>Logout</a>
          </li>

          <li>
            <a href="" className="user-option" onClick={this.goToSettings}>Settings</a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = LoggedInOptions;
