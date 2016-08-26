/* globals Pusher */

const React           = require('react');
const ReactDOM        = require('react-dom');
const hashHistory     = require('react-router').hashHistory;
const SurveyStore     = require('../../stores/survey_store.js');
const ResponseStore   = require('../../stores/response_store.js');
const ResponseActions = require('../../actions/response_actions.js');
const SurveyActions   = require('../../actions/survey_actions.js');
const QuestionReport  = require('./question_report.jsx');
const NavBarForPollCreator = require('../nav_bar/nav_bar_for_poll_creator.jsx');
const CreateSurveyModal = require('../survey_creation/create_survey_modal.jsx');

const SurveyReport = React.createClass({
  getInitialState() {
    return({
      surveyTitle: undefined,
      responseUrl: undefined,
      questions: []
    });
  },

  componentDidMount() {
    this.surveyListener = SurveyStore.addListener(this._onSurveyChange);
    this.responseListener = ResponseStore.addListener(this._onResponseChange);

    SurveyActions.getSurvey(this.props.params.surveyId);
    ResponseActions.surveyResponses(this.props.params.surveyId);

    const pusher = new Pusher('98aa24bcedf9f814bbe7', {
      encrypted: true
    });

    let surveyId = this.props.params.surveyId;
    const channel = pusher.subscribe(`survey_${surveyId}`);

    channel.bind('vote', function(data) {
      ResponseActions.surveyResponses(surveyId);
    });
  },

  componentWillUnmount() {
    this.surveyListener.remove();
    this.responseListener.remove();
  },

  _onSurveyChange() {
    let survey = SurveyStore.find(this.props.params.surveyId);

    this.setState({
      surveyTitle: survey.survey_title,
      responseUrl: `${window.location.origin}/#/${survey.response_url}`,
      questions: survey.questions
    });
  },

  _onResponseChange() {

    let numVotes = ResponseStore.answersToSurvey(this.props.params.surveyId).length;

    this.setState({
      numVotes: numVotes,
      votes: ResponseStore.answersToSurvey(this.props.params.surveyId)
    });
  },

  _questionResponses(question) {
    let responses = [];

    if (this.state.votes !== undefined && this.state.votes.length > 0) {
      this.state.votes.forEach((vote) => {
        if (vote.questionId === question.id) {
          responses.push(vote.optionId);
        }
      });
    }

    return responses;
  },

  questionReports() {
    let reports = [];

    if (this.state.questions.length > 0) {
      this.state.questions.forEach((question, i) => {
        let votes = this._questionResponses(question);

        reports.push(
          <QuestionReport
            key={i}
            question={question}
            votes={votes}
          />
        );
      });
    }

    return reports;
  },

  questionText() {
    let questionList = [];

    this.state.questions.forEach((question, i) => {
      questionList.push(<li key={i}>{question.question}</li>);
    });

    return questionList;
  },

  pollDataSummary() {
    return(
      <div>
        <h4>{this.state.surveyTitle}</h4>
        <ul className="summary-list">
          <li>{this.state.responseUrl}</li>
          <li>Questions:
            <ul className="question-text-list">
              {this.questionText()}
            </ul>
          </li>
        </ul>
      </div>
    );
  },

  render() {
    return(
      <div>
        <NavBarForPollCreator/>

        <div className={"survey-report-page group"}>

          <div className={"survey-reporting-sidebar group"}>
            {this.pollDataSummary()}
          </div>

          <div className={"main-survey-content group"}>

            <div className={"response-instructions group"}>
              <h1>{this.state.surveyTitle}</h1>
              <aside className="response-url">
                <a href={this.state.responseUrl}>{this.state.responseUrl}</a>
              </aside>
            </div>

            {this.questionReports()}

          </div>
        </div>

        <CreateSurveyModal/>
      </div>
    );
  }
});

module.exports = SurveyReport;
