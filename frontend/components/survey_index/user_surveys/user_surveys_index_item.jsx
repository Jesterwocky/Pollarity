const React        = require('react');
const ReactDOM     = require('react-dom');
const hashHistory  = require('react-router').hashHistory;
const SurveyStore  = require('../../../stores/survey_store.js');
const SessionStore = require('../../../stores/session_store.js');
const SurveyActions = require('../../../actions/survey_actions.js');

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function formatDate(dateTime) {
  let dateNumbers = dateTime.slice(0, 10).split("-");

  let numberYear  = parseInt(dateNumbers[0]);
  let numberMonth = parseInt(dateNumbers[1]) - 1;
  let numberDay   = parseInt(dateNumbers[2]);

  return `${months[numberMonth]} ${numberDay}, ${numberYear}`;
}

const UserSurveysIndexItem = React.createClass({
  listQuestions() {
    return this.props.survey.questions.map((question, i) => {
      return(
        <div key={i} className={"user-question group"}>
          <div className="survey-question-text">{question.question}</div>
        </div>
      );
    });
  },

  listQuestionsWithData() {
    return this.props.survey.questions.map((question, i) => {
      return(
        <div className={"user-question group"} key={i}>
          <span className="survey-question-text">{question.question}</span>
          <ul key={i} className="user-question-row">
            <li key={i}>{question.options.length} options</li>
            <li key={i + 1}>{this.sumVotes(question)} responding</li>
          </ul>
        </div>
      );
    });
  },

  // Removed this from above for now:
  // <div className="mouseover-question-details">
  //   {this.optionSummary(question)}
  // </div>

  optionSummary(question) {
    let summaryList = [];

    question.options.forEach((option, i) => {
      if (option.image_url !== undefined) {
        summaryList.push(
          <li key={i}>
            <img className="option-summary-image" src={option.image_url}/>{option.option} - {option.votes.length} votes
          </li>
        );
      }

      else {
        summaryList.push(
          <li key={i}>
            {option.option} - {option.votes.length}
          </li>
        );
      }

    });

    return (
      <ul className="question-summary-list">{summaryList}</ul>
    );
  },

  sumVotes(question) {
    let totalVotes = 0;

    question.options.forEach((option) => {
      totalVotes += option.votes.length;
    });

    return totalVotes;
  },

  dateInfo() {
    return `${formatDate(this.props.survey.created_at)}`;
  },

  editSurvey (e) {
    e.preventDefault();
    SurveyActions.getSurveyToEdit(this.props.survey.id);
  },

  deleteSurvey (e) {
    e.preventDefault();
    if (confirm("Are you sure? All responses to this survey will be deleted.")) {
      SurveyActions.deleteSurvey(this.props.survey.id);
    }
  },

  render() {
    let questions    = this.listQuestionsWithData();
    let responseUrl  = `${window.location.origin}/#/${this.props.survey.response_url}`;
    let reportingUrl = `${window.location.origin}/#/users/${SessionStore.currentUser().id}/surveys/${this.props.survey.id}`;

    return (
      <div className={"user-survey group"}>
        <div className="above-survey-line group">
          <div className="user-survey-date">{this.dateInfo()}</div>
          <div className="edit-and-delete-links">
            <a onClick={this.editSurvey}>Edit</a>
            <a onClick={this.deleteSurvey}>Delete</a>
          </div>
        </div>
        <div className="user-survey-box">
          <div className="user-survey-title group">
            <div className="basic-survey-info">
              <a className="survey-title" href={reportingUrl}>{this.props.survey.survey_title}</a>
            </div>
            <div className="survey-controls">
              <a className="poll-report-link" href={reportingUrl}>Live poll results</a>
              <a href={responseUrl} target="_blank" className="url-share-link">Share</a>
              <small className="survey-url">
                {responseUrl}
              </small>
            </div>
          </div>
          {questions}
        </div>
      </div>
    );
  }
});

module.exports = UserSurveysIndexItem;
