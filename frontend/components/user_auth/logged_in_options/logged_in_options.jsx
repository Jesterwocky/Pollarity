const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../../../stores/session_store.js');
const SessionActions = require('../../../actions/session_actions.js');

const CreateSurveyButton = require('../../survey_creation/create_survey_button.jsx');
const UserSurveysButton = require('../../nav_bar/nav_bar_items/user_surveys_button.jsx');

const LoggedInOptions = React.createClass({
  getInitialState() {
    return({
      username: SessionStore.currentUser().username
    });
  },

  componentDidMount() {
    this.listener = SessionStore.addListener(this._handleSessionChange);
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  _handleSessionChange() {
    if (SessionStore.isUserLoggedIn) {
      this.setState({
        username: SessionStore.currentUser().username
      });
    }
  },

  goToRoot(e) {
    e.preventDefault();
    hashHistory.push("");
  },

  openMenu(e) {
    e.preventDefault();
    $(".user-option").toggle();
  },

  logOut(e) {
    e.preventDefault();
    $(".user-option").toggle();
    SessionActions.logOut();
    hashHistory.push("");
  },

  goToSettings(e) {
    e.preventDefault();
    $(".user-option").toggle();
    hashHistory.push("settings");
  },

  userOptions() {
    return (
      <ul className="user-options">
        <li>
          <div className="nav-bar-username" onClick={this.openMenu}>
            {this.state.username}
          </div>
        </li>

        <li>
          <div className="user-option" onClick={this.logOut}>
            Log out
          </div>
        </li>
      </ul>
    );
  },

  render() {
    return (
      <div className="logged-in-user-menu">
        <ul className="nav-bar-survey-options">
          <li>
            <CreateSurveyButton/>
          </li>

          <li>
            <UserSurveysButton/>
          </li>
        </ul>

        <button onClick={this.goToRoot} className="nav-bar-logo-logged-in-non-home">Pollarity</button>

        {this.userOptions()}
      </div>
    );
  }
});

module.exports = LoggedInOptions;
