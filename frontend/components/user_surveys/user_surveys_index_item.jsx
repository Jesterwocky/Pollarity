const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const SurveyStore = require('../../stores/survey_store.js');

const UserSurveysIndexItem = React.createClass({

  listQuestions() {

    return this.props.survey.questions.map((question, i) => {
      return(
        <div key={i} className={"user-question group"}>
          <input type="checkbox" className="survey-edit-checkbox"/>
          <div className="survey-question-text">{question.question}</div>
        </div>
      );
    });
  },

  render() {
    let questions = this.listQuestions();
    let responseUrl = `${window.location.origin}/#/${this.props.survey.response_url}`;

    return (
      <div className={"user-survey group"}>
        <div className="user-survey-title">
          {this.props.survey.survey_title}
          <div className="survey-controls">
            <small className="survey-url">
              <a href={responseUrl}>Share:</a> {responseUrl}
            </small>
            <button className="edit-survey-in-modal">Edit Survey</button>
            <button className="delete-selected-questions">Delete Selected Questions</button>
          </div>
        </div>
        {questions}
      </div>
    );
  }
});

module.exports = UserSurveysIndexItem;
