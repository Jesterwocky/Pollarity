const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;

const NewPollButton = React.createClass({

  openNewSurveyModal (e) {
    e.preventDefault();
    //instead, probably want to redirect to MySurveys and then open modal
    $(".new-survey-modal").show();
  },

  render() {
    return (
      <div onClick={this.openNewSurveyModal} className="create-survey-button">
        +
      </div>
    );
  }
});

module.exports = NewPollButton;
