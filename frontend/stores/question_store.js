//THIS FILE MAY BE USED FOR EDITING of QUESTIONS

const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');
const QuestionConstants = require('../constants/Question_constants.js');

// let _questions = {};
//
// const _resetQuestions = function(questions) {
//   _questions = {};
//
//   questions.forEach((question) => {
//     _questions[question_id] = question;
//   });
// };
//
// const _removeQuestion = function(questionId) {
//   delete _questions[questionId];
// };
//
// const QuestionStore = new Store(Dispatcher);
//
// QuestionStore.surveyQuestions = function(surveyId) {
//
// };

QuestionStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case QuestionConstants.QUESTION_REMOVED:
      this.__emitChange();
      break;
  }
};
