const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../../stores/session_store.js');

const UserSurveysButton = React.createClass({

  goToUserSurveys(e) {
    e.preventDefault();
    hashHistory.push(`users/${SessionStore.currentUser().id}/surveys`);
  },

  render() {
    return (
      <div onClick={this.goToUserSurveys} className="user-surveys-link">
        Polls
      </div>
    );
  }
});

module.exports = UserSurveysButton;
