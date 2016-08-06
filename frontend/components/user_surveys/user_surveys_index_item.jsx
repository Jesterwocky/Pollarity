const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const SurveyStore = require('../../stores/survey_store.js');

const UserSurveysIndexItem = React.createClass({

  listQuestions() {

    return (
      <div className="user-question">This will be one of many questions</div>
    );
  },

  render() {
    return (
      <div className="user-surveys">
        <div className="user-survey-title">{this.props.survey.survey_title}</div>
        {this.listQuestions()}
      </div>
    );
  }
});

module.exports = UserSurveysIndexItem;
