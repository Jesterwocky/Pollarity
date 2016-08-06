const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;

const SurveyStore = require('../../../stores/survey_store.js');
const SurveyActions = require('../../../actions/survey_actions.js');
const hashHistory = require('react-router').hashHistory;

const CreateSurvey = React.createClass({
  getInitialState() {
    return ({
      questionType: "single",
      surveyTitle: "",
      questionList: [],
      questionNum: 0,
      questionElements: []
    });
  },

  oneQuestionForm() {
    // Change tab state;
    // change form display
  },

  multiQuestionForm() {
    // Change tab state;
    // change form display
  },

  addQuestionBox(e) {
    e.preventDefault();

    let questionElements = this.state.questionElements.slice();
    let questions = {};
    Object.assign(questions, this.state.questionList);

    questionElements.push (
      <CreateQuestion key={this.state.questionNum}
        recordQuestion={this.recordQuestion.bind(this)}
        questionText={e.currentTarget.value}/>
    );

    questions[this.state.questionNum] = e.currentTarget.value;

    let questionNum = this.state.questionNum + 1;

    this.setState({
      questionNum: questionNum,
      questionElements: questionElements,
      questions: questions
    });
  },

  recordQuestion(question) {

  },

  render() {
    let classnames = "create-survey-box group";

    return (
      <div className={classnames}>
        <ul>

          <li><div onClick={oneQuestionForm}>
            QUESTION
          </div></li>

          <li><div onClick={multiQuestionForm}>
            Survey
          </div></li>

        </ul>

        <section className="multi-q-survey-section">
          <p>
            Combine multiple questions into a survey and send the link to participants. They can answer at their own pace.
          </p>
          <input type="text" value={this.state.surveyTitle}/>
        </section>

        <section className="question-creation-section">
          // An array of the survey's child questions
          {this.state.questions}

          <div className="new-question-placeholder">
            <label>Add a Question:</label>
            <input type="text" onChange={this.addQuestionBox}/>
          </div>

        </section>
      </div>
    );
  }
});
