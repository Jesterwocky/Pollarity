const QuestionApiUtil = require('../util/question_api_util.js');
const Dispatcher = require('../dispatcher/dispatcher.js');
const QuestionConstants = require('../constants/question_constants.js');
const ErrorActions = require('../actions/error_actions.js');

module.exports = {

  deleteQuestion(questionId) {
    QuestionApiUtil.deleteQuestion(
      questionId,
      this.removeQuestion,
      ErrorActions.setErrors
    );
  },

  deleteQuestions(questionIds) {
    for (let questionId of questionIds) {
      QuestionApiUtil.deleteQuestion(
        questionId,
        this.removeQuestion,
        ErrorActions.setErrors
      );
    }
  },

  // Callbacks
  removeQuestion(questionData) {
    Dispatcher.dispatch({
      actionType: QuestionConstants.QUESTION_REMOVED,
      questionData: questionData
    });
  }

};
