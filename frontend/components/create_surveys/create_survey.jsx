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
      questionElements: [],
      questions: {}
    });
  },

  updateTitle(e) {
    e.preventDefault();

    this.setState({
      surveyTitle: e.currentTarget.value
    });
  },

  toggleFormType(e) {
    e.preventDefault();
    console.log("Toggling form type!");
  },

  addQuestionBox(e) {
    e.preventDefault();

    let questionElements = this.state.questionElements.slice();

    questionElements.push (
      <CreateQuestion
        key={this.state.questionNum}
        questionNum={this.state.questionNum}
        initialQuestionText={e.currentTarget.value}
        deleteQuestion={this.deleteQuestion}
        updateQuestion={this.updateQuestion}
      />
    );

    e.currentTarget.value = "";

    this.setState({
      questionNum: this.state.questionNum + 1,
      questionElements: questionElements,
    });
  },

  deleteQuestion(num) {
    let questionElements = this.state.questionElements;

    questionElements.forEach((el, i) => {
      if (el.props.questionNum === num) {
        questionElements.splice(i, 1);
      }
    });

    this.setState({
      questionElements: questionElements
    });
  },

  closeModal(e) {
    e.preventDefault();
    $(".modal").hide();
  },

  updateQuestion(questionNum, questionData) {
    this.state.questions[questionNum] = questionData;
  },

  saveSurvey(e) {
    e.preventDefault();

    let surveyData = {
      author_id: SessionStore.currentUser().id,
      survey_title: this.state.surveyTitle,
      questions_attributes: this.state.questions,
    };

    SurveyActions.createSurvey(surveyData);

    this.setState({
        questionType: "multi",
        surveyTitle: "",
        questionNum: 0,
        questionElements: [],
        questions: {}
    });

    $(".modal").hide();
  },

  render() {
    let fullBoxClassnames = "create-survey-box group";
    let questionContentClassnames = "question-content-box group";
    let overlayClasses = "dark-overlay group";

    return (
      <div className={fullBoxClassnames}>

        <div className="question-type-tabs">

          <div onClick={this.toggleFormType} className="question-type-tab-selected">
            SURVEY
          </div>

        </div>

        <div className="question-box-body">

          <section className="multi-q-survey-section">

            <p className="multi-q-text">
              Combine questions into a survey and send the link to participants. Participants can answer at their own pace.
            </p>

            <section className="survey-title-section">
              <label>Title:</label>
              <input type="text" onChange={this.updateTitle} className="survey-title-input" placeholder="Survey Title"/>
            </section>

          </section>

          <section className="question-creation-section">
            {this.state.questionElements}

            <div id="question-placeholder" className={questionContentClassnames}>
              <label>Add a Question:</label>
              <input type="text" onChange={this.addQuestionBox} placeholder="Your question goes here"/>
            </div>

          </section>

          <div className="survey-build-controls">
            <a href="" onClick={this.closeModal} className="cancel-link">Cancel</a>
            <button onClick={this.saveSurvey} className="build-survey-button">Create -></button>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = CreateSurvey;
