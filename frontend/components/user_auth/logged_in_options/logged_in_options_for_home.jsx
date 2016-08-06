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

  goToUserPolls(e) {
    e.preventDefault();
    hashHistory.push(`users/${SessionStore.currentUser().id}/surveys`);
  },

  userOptions() {
    return (
      <ul id="home-user-options">
        <li>
          <a href="" onClick={this.goToUserPolls}>My Polls</a>
        </li>

        <li>
          <a href="" onClick={this.logOut}>Logout</a>
        </li>

      </ul>
    );
  },

  render() {
    return (
      <div className="logged-in-user-menu">
        {this.userOptions()}
      </div>
    );
  }
});

module.exports = LoggedInOptions;
