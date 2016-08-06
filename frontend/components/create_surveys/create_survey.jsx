const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const SurveyStore = require('../../stores/survey_store.js');
const SurveyActions = require('../../actions/survey_actions.js');
const CreateQuestion = require('./create_question.jsx');

const CreateSurvey = React.createClass({
  getInitialState() {
    return ({
      questionType: "multi",
      surveyTitle: "",
      questionNum: 0,
      questionElements: []
    });
  },

  toggleFormType() {
    console.log("Toggling form type!");
  },

  packageQuestions() {
    //on submit of form, need to package up the questions and options in children
  },

  addQuestionBox(e) {
    e.preventDefault();

    let questionElements = this.state.questionElements.slice();

    questionElements.push (
      <CreateQuestion
        key={this.state.questionNum}
        questionText={e.currentTarget.value}
      />
    );

    this.setState({
      questionNum: this.state.questionNum + 1,
      questionElements: questionElements,
    });
  },

  render() {
    let fullBoxClassnames = "create-survey-box group";

    return (
      <div className={fullBoxClassnames}>
        <div className="question-type-tabs">
          <div onClick={this.toggleFormType} className="question-type-tab">
            QUESTION
          </div>

          <div onClick={this.toggleFormType} className="question-type-tab-selected">
            SURVEY
          </div>

        </div>

        <div className="question-box-body">
          <section className="multi-q-survey-section">
            <p className="multi-q-text">
              Combine multiple questions into a survey and send the link to participants. Participants can answer at their own pace.
            </p>
            <input type="text" value={this.state.surveyTitle}/>
          </section>

          <section className="question-creation-section">
            {this.state.questionElements}

            <div className="new-question-placeholder">
              <label>Add a Question:</label>
              <input type="text" onChange={this.addQuestionBox}/>
            </div>

          </section>
        </div>

      </div>
    );
  }
});

module.exports = CreateSurvey;
