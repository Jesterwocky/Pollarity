const React              = require('react');
const ReactDOM           = require('react-dom');
const hashHistory        = require('react-router').hashHistory;
const SessionStore       = require('../../stores/session_store.js');
const SurveyStore        = require('../../stores/survey_store.js');
const ResponseStore      = require('../../stores/response_store.js');
const ResponseActions    = require('../../actions/response_actions.js');
const QuestionAndAnswers = require('./question_and_answers.jsx');
const ErrorStore         = require('../../stores/error_store.js');
const ErrorDisplay       = require('../../error_display.jsx');
const SurveyActions      = require('../../actions/survey_actions.js');

const ResponseForm = React.createClass ({

  getInitialState() {
    let surveyId = parseInt(this.props.params.surveyId);

    let survey = SurveyStore.find(surveyId);

    return ({
      surveyId: surveyId,
      survey: survey,
    });
  },

  // was componentDidMount
  componentWillMount() {
    this.surveyListener = SurveyStore.addListener(this._handleSurveyChange);
    this.errorListener = ErrorStore.addListener(this._onErrorChange);
    SurveyActions.getSurvey(this.state.surveyId);

    ResponseActions.getResponsesByUser(SessionStore.currentUser().id);
  },

  componentWillUnmount() {
    this.surveyListener.remove();
    this.errorListener.remove();
  },

  _onErrorChange() {
    this.setState({
      errors: ErrorStore.errors(this.formType())
    });
  },

  formType() {
    return "responseForm";
  },

  _handleSurveyChange() {
    let survey = SurveyStore.find(this.props.params.surveyId);

    this.setState({
      survey: survey,
    });
  },

  questionsAndAnswers () {
    if (this.state.survey === undefined) {
      return [];
    }

    else {
      let questionElements = [];

      this.state.survey.questions.forEach((question, i) => {
        questionElements.push(
          <QuestionAndAnswers
            key={i}
            question={question}
          />
        );
      });

      return questionElements;
    }
  },

  render() {
    let surveyTitle = "";
    if (this.state.survey !== undefined) {
      surveyTitle = this.state.survey.survey_title;
    }

    return (
      <div className={"survey-response-page group"}>
        <ErrorDisplay errors={this.state.errors}/>

        <div className="survey-response-form">
          <h1>{surveyTitle}</h1>
          <div className="survey-questions">
            {this.questionsAndAnswers()}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ResponseForm;
