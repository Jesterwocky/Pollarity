const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../../../stores/session_store.js');
const SessionActions = require('../../../actions/session_actions.js');

const CreateSurveyButton = require('../../create_surveys/create_survey_button.jsx');
const UserSurveysButton = require('../../user_surveys/user_surveys_button.jsx');


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

  pollarityLogo() {
    return (
      <button onClick={this.goToRoot} className="nav-bar-logo">Pollarity</button>
    );
  },

  userOptions() {
    let hiddenOptionClasses = "hidden user-option";

    return (
      <ul id="user-options">
        <li>
          <a href="" id="nav-bar-username">{this.state.username}</a>
        </li>

        <li>
          <a href="" className={hiddenOptionClasses} onClick={this.logOut}>Logout</a>
        </li>

        <li>
          <a href="" className={hiddenOptionClasses} onClick={this.goToSettings}>Settings</a>
        </li>
      </ul>
    );
  },

  render() {
    return (
      <ul className="logged-in-user-menu">
        <li>
          <CreateSurveyButton/>
        </li>

        <li>
          <UserSurveysButton/>
        </li>

        <li>
          {this.pollarityLogo()}
        </li>

        <li>
          {this.userOptions()}
        </li>
      </ul>
    );
  }
});

module.exports = LoggedInOptions;
