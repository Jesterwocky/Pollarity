const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;

const CreateSurveyButton = React.createClass({

  goToCreateSurvey(e) {
    e.preventDefault();
    console.log("This will open a new survey modal");
  },

  render() {
    return (
      <a href="" onClick={this.goToCreateSurvey} id="add-poll-link">+</a>
    );
  }
});

module.exports = CreateSurveyButton;
