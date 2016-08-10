/* globals Pusher */

const React           = require('react');
const ReactDOM        = require('react-dom');
const hashHistory     = require('react-router').hashHistory;
const SurveyStore     = require('../../stores/survey_store.js');
const ResponseStore   = require('../../stores/response_store.js');
const ResponseActions = require('../../actions/response_actions.js');
const QuestionReport  = require('./question_report.jsx');

const SurveyReport = React.createClass({

  getInitialState() {
    return({
      surveyId: undefined,
      surveyTitle: undefined,
      responseUrl: undefined,
      questions: []
    });
  },

  componentDidMount() {
    this.surveyListener = SurveyStore.addListener(this._onSurveyChange);
    this.responseListener = ResponseStore.addListener(this._onResponseChange);

    SurveyActions.getSurvey(this.props.params.surveyId);

    const pusher = new Pusher('98aa24bcedf9f814bbe7', {
      encrypted: true
    });

    const channel = pusher.subscribe(`survey_${this.props.params.surveyId}`);
    channel.bind('vote', function(data) {
      alert(data.message);
      ResponseActions.surveyResponses(this.props.params.surveyId);
    });

  },

  _onSurveyChange() {
    let survey = SurveyStore.find(this.props.params.surveyId);

    this.setState({
      surveyId: survey.id,
      surveyTitle: survey.survey_title,
      responseUrl: `${window.location.origin}/#/${survey.response_url}`,
      questions: survey.questions
    });
  },

  _onResponseChange() {
    let responses = ResponseStore.answersToSurvey();

    this.setState({
      responses: responses
    });
  },

  questionReports() {
    let reports = [];

    if (this.state.questions.length > 0) {
      this.state.questions.forEach((question, i) => {
        reports.push(
          <QuestionReport
            key={i}
            question={question}
          />
        );
      });
    }

    return reports;
  },

  render() {
    return(
      <div className={"survey-report-page group"}>
        <h1>{this.state.surveyTitle}</h1>
        <div className={"response-instructions group"}>
          <aside>
            Respond at <a href={this.state.responseUrl}>{this.state.responseUrl}</a>
          </aside>
        </div>
        {this.questionReports()}
      </div>
    );
  }
});

module.exports = SurveyReport;
