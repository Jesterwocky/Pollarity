const React        = require('react');
const ReactDOM     = require('react-dom');
const hashHistory  = require('react-router').hashHistory;
const SurveyStore  = require('../../../stores/survey_store.js');
const SessionStore = require('../../../stores/session_store.js');

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

  render() {
    let questions = this.listQuestionsWithData();
    let responseUrl = `${window.location.origin}/#/${this.props.survey.response_url}`;
    let reportingUrl = `${window.location.origin}/#/users/${SessionStore.currentUser().id}/surveys/${this.props.survey.id}`;

    return (
      <div className={"user-survey group"}>
        <div className="user-survey-title">
          <a href={reportingUrl}>{this.props.survey.survey_title}</a>
          <div className="survey-controls">
            <div className="poll-report-link">
              <a href={reportingUrl}>
                Live poll results
              </a>
            </div>
            <a href={responseUrl} className="url-share-link">share:</a>
            <small className="survey-url">
                {responseUrl}
            </small>
          </div>
        </div>
        {questions}
      </div>
    );
  }
});

module.exports = UserSurveysIndexItem;
