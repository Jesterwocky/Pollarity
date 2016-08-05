const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;

const UserSurveysButton = React.createClass({

  goToUserSurveys(e) {
    e.preventDefault();
    console.log("This will go to the user's survey page");
  },

  render() {
    return (
      <a href="" onClick={this.goToUserSurveys} id="user-surveys-link">Polls</a>
    );
  }
});

module.exports = UserSurveysButton;
