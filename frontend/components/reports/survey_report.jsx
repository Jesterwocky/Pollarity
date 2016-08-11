/* globals Pusher */

const React           = require('react');
const ReactDOM        = require('react-dom');
const hashHistory     = require('react-router').hashHistory;
const SurveyStore     = require('../../stores/survey_store.js');
const QuestionReport  = require('./question_report.jsx');
const ResponseStore = require('../../stores/response_store.js');
const ResponseActions = require('../../actions/response_actions.js');

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

    // const pusher = new Pusher('98aa24bcedf9f814bbe7', {
    //   encrypted: true
    // });
    //
    // const channel = pusher.subscribe(`questions_${this.props.params.question.id}`);
    //
    // channel.bind('vote', function(data) {
    //   alert("Someone voted!");
    //   ResponseActions.surveyResponses(this.props.params.surveyId);
    // });
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

    let numVotes = ResponseStore.answersToSurvey().length;

    this.setState({
      numVotes: numVotes,
      votes: ResponseStore.answersToSurvey()
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

  pollDataSummary() {
    return(
      <div>
        <h4>{this.state.surveyTitle}</h4>
        <p>survey summary</p>
        <ul>
          <li>{this.state.responseUrl}</li>
          <li>Total participants: {this.state.numVotes}</li>
          <li>Questions summary goes here</li>
        </ul>
      </div>
    );
  },

  render() {
    return(
      <div className={"survey-report-page group"}>
        <div className={"survey-reporting-sidebar group"}>
          {this.pollDataSummary()}
        </div>

        <div className={"main-survey-content group"}>

          <div className={"response-instructions group"}>
            <h1>{this.state.surveyTitle}</h1>
            <aside className="response-url">
              Respond at: <a href={this.state.responseUrl}>{this.state.responseUrl}</a>
            </aside>
          </div>

          {this.questionReports()}

        </div>
      </div>
    );
  }
});

module.exports = SurveyReport;
