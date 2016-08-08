const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const SurveyStore = require('../../stores/survey_store.js');
const QuestionAndAnswers = require('./question_and_answers.jsx');

const ResponseForm = React.createClass ({

  getInitialState() {
    let surveyId = parseInt(this.props.params.surveyId);

    let survey = SurveyStore.find(surveyId);

    return ({
      surveyId: surveyId,
      survey: survey,
    });
  },

  componentDidMount() {
    this.listener = SurveyStore.addListener(this._handleSurveyChange);
    SurveyActions.getSurvey(this.state.surveyId);
  },

  _handleSurveyChange() {
    console.log("Survey store changed!");
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
            question={question}/>
        );
      });

      return questionElements;
    }
  },

  render() {
    let surveyTitle = "";
    if (this.survey !== undefined) {
      surveyTitle = this.survey.survey_title;
    }

    return (
      <div className="survey-response-page">

        <div className="response-page-header">
          <h1>Header goes here</h1>
        </div>

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
