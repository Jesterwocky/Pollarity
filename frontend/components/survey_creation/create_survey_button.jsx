const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;

const CreateSurveyButton = React.createClass({

  openNewSurveyModal (e) {
    e.preventDefault();
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

module.exports = CreateSurveyButton;
