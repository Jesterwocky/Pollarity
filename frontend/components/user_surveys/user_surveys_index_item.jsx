const React       = require('react');
const ReactDOM    = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const SurveyStore = require('../../stores/survey_store.js');

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

  render() {
    let questions = this.listQuestions();
    let responseUrl = `${window.location.origin}/#/${this.props.survey.response_url}`;
    let reportingUrl = `${window.location.origin}/#/users/${SessionStore.currentUser().id}/surveys/${this.props.survey.id}`;

    return (
      <div className={"user-survey group"}>
        <div className="user-survey-title">
          {this.props.survey.survey_title}

          <div className="survey-controls">
            <div className="poll-report-link">
              <a href={reportingUrl}>
                realtime poll results
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
