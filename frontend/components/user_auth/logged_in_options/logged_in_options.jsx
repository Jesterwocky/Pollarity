const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../../../stores/session_store.js');
const SessionActions = require('../../../actions/session_actions.js');


const LoggedInOptions = React.createClass({
  getInitialState() {
    return({
      username: SessionStore.currentUser().username
    });
  },

  componentDidMount() {
    this.listener = SessionStore.addListener(this._handleSessionChange);
  },

  _handleSessionChange() {
    this.setState({
      username: SessionStore.currentUser().username
    });
  },

  logOut(e) {
    e.preventDefault();
    SessionActions.logOut();
  },

  goToSettings(e) {
    e.preventDefault();
    hashHistory.push("settings");
  },

  render() {
    let optionClasses = "hidden user-option";

    return (
        <ul id="user-options">
          <li>
            <a href="" id="nav-bar-username">{this.state.username}</a>
          </li>

          <li>
            <a href="" className={optionClasses} onClick={this.logOut}>Logout</a>
          </li>

          <li>
            <a href="" className={optionClasses} onClick={this.goToSettings}>Settings</a>
          </li>
        </ul>
    );
  }
});

module.exports = LoggedInOptions;
