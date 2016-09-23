const React          = require('react');
const ReactDOM       = require('react-dom');
const hashHistory    = require('react-router').hashHistory;
const SurveyStore    = require('../../stores/survey_store.js');
const EditSurveyStore = require('../../stores/edit_survey_store.js');
const SurveyActions  = require('../../actions/survey_actions.js');
const EditQuestion   = require('./edit_question.jsx');
const ErrorStore     = require('../../stores/error_store.js');
const ErrorDisplay   = require('../../error_display.jsx');
const SessionStore   = require('../../stores/session_store.js');

const EditSurvey = React.createClass({

  getInitialState() {
    return ({
      surveyTitle: null,
      questionNum: 0,
      questionElements: [],
      questions: {},
      errors: []
    });
  },

  componentDidMount() {
    this.surveyListener = SurveyStore.addListener(this._handleSurveyChange);
    this.editSurveyListener = EditSurveyStore.addListener(this._onEditSurveyChange);
    this.errorListener = ErrorStore.addListener(this._onErrorChange);
  },

  componentWillUnmount() {
    this.surveyListener.remove();
    this.editSurveyListener.remove();
    this.errorListener.remove();
  },

  _handleSurveyChange () {
    $(".edit-survey-modal").hide();
  },

  _onEditSurveyChange() {
    if (EditSurveyStore.hasSurveyToEdit()) {
      $(".edit-survey-modal").show();

      let surveyToEdit = EditSurveyStore.getSurveyToEdit();

      let questionElements = [];
      let questions = {};
      let questionNum = 0;

      for (let question of surveyToEdit.questions) {
        // questions[questionNum] = {id: question.id, question: question};

        questions[questionNum] = {};

        questionElements.push (
          <EditQuestion
            id={question.id}
            key={this.state.questionNum}
            questionNum={questionNum}
            initialQuestionText={question.question}
            options={question.options}
            deleteQuestion={this.deleteQuestion}
            updateQuestion={this.updateQuestion}
            />
        );

        questionNum += 1;
      }

      this.setState({
        surveyToEdit: surveyToEdit,
        surveyTitle: surveyToEdit.survey_title,
        questions: questions,
        questionElements: questionElements,
        questionNum: questionNum
      });
    }

    else {
      $(".edit-survey-modal").hide();
      this.setState({
        surveyTitle: null,
        questionNum: 0,
        questionElements: [],
        questions: {},
        errors: []
      });
    }
  },

  _onErrorChange() {
    this.setState({
      errors: ErrorStore.errors(this.formType())
    });
  },

  formType() {
    return "editSurveyForm";
  },

  // editSurvey (e) {
  //   e.preventDefault();
  //   this.props.editSurvey(this.props.survey.id);
  // },

  updateTitle(e) {
    e.preventDefault();

    this.setState({
      surveyTitle: e.currentTarget.value
    });
  },

  updateQuestion(questionNum, questionData) {
    this.state.questions[questionNum] = questionData;
  },

  addQuestionBox(e) {
    e.preventDefault();

    let questionElements = this.state.questionElements.slice();

    questionElements.push (
      <EditQuestion
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

  stopEdit(e) {
    e.preventDefault();
    SurveyActions.clearSurveyToEdit();
  },

  saveSurvey(e) {
    e.preventDefault();

    debugger
    let surveyData = {
      id: this.state.surveyToEdit.id,
      survey_title: this.state.surveyTitle,
      questions_attributes: this.state.questions
    };
    SurveyActions.updateSurvey(surveyData);
  },

  render() {
    if (this.state.surveyToEdit !== undefined) {

      return (
        <div className="create-survey-box group">

          <div className="question-type-tabs">

            <div className="question-type-tab-selected">
              EDIT
            </div>

          </div>

          <div className="question-box-body">

            <ErrorDisplay errors={this.state.errors}/>

            <section className="multi-q-survey-section">

              <p className="multi-q-text">
                Edit in progress. Revise, delete, or add new questions and options.
              </p>

              <section className="survey-title-section">
                <label>Title:</label>
                <input type="text"
                  onChange={this.updateTitle}
                  className="survey-title-input"
                  placeholder="Survey Title"
                  value={this.state.surveyTitle}
                  />
              </section>

            </section>

            <section className="question-creation-section">
              {this.state.questionElements}

              <div id="question-placeholder" className="question-content-box group">
                <label>Add a Question:</label>
                <input type="text" onChange={this.addQuestionBox} placeholder="Your question goes here"/>
              </div>

            </section>

            <div className="survey-build-controls">
              <a onClick={this.stopEdit} className="cancel-link">Cancel</a>
              <button onClick={this.saveSurvey} className="build-survey-button">Update Survey &rarr;</button>
            </div>
          </div>

        </div>
      );
    }

    else {
      return (
        <div></div>
      );
    }
  }
});

module.exports = EditSurvey;
