const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;

const CreateSurveyButton = React.createClass({

  openModal (e) {
    e.preventDefault();
    //instead, probably want to redirect to MySurveys and then open modal
    $(".modal").show();
  },

  render() {
    return (
      <div onClick={this.openModal} className="create-survey-button">
        +
      </div>
    );
  }
});

module.exports = CreateSurveyButton;
