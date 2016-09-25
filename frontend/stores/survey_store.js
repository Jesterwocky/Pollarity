/* jshint loopfunc:true */

const Store           = require('flux/utils').Store;
const Dispatcher      = require('../dispatcher/dispatcher.js');
const SurveyConstants = require('../constants/survey_constants.js');
const QuestionConstants = require('../constants/question_constants.js');
const OptionConstants = require('../constants/option_constants.js');


const SurveyStore = new Store(Dispatcher);

let _surveys = {};

// REMEMBER: single surveys must be passed in an array
const _resetSurveys = function(surveys) {
  _surveys = {};

  surveys.forEach((survey) => {
    _surveys[survey.id] = survey;
  });
};

const _addSurvey = function(survey) {
  _surveys[survey.id] = survey;
};

const _removeSurvey = function(surveyId) {
  delete _surveys[surveyId];
};

const _removeSurveys = function(surveyIds) {
  for (let id of surveyIds) {
    delete _surveys[id];
  }
};

const _removeQuestion = function(questionData) {
  let questionId = questionData.id;
  let surveyId = questionData.surveyId;
  let questions = _surveys[questionData.surveyId].questions;

  for (let questionNum of Object.keys(questions)) {
    if (questions[questionNum].id === questionId) {
      delete _surveys[surveyId].questions[questionNum];
      break;
    }
  }
};

const _removeOption = function(optionId) {
  let surveysCopy = Object.assign({}, _surveys);
  let found = false;

  for (let surveyId of Object.keys(survey)) {
    if (found) break;
    for (let questionId of Object.keys(surveysCopy[surveyId].questions)) {
      let hasOption = Object.keys(surveysCopy[surveyId].questions[questionId].options).some(id => id === optionId);
      if (hasOption) {
        delete surveysCopy[surveyId].questions[questionId].options[optionId];
        found = true;
        break;
      }
    }
  }

  Object.assign(_surveys, surveysCopy);
  // for (let survey of surveysCopy) {
  //   if (found) break;
  //   for (let question of survey.questions) {
  //     if (Object.keys(question).some(id => id === optionId)) {
  //       delete question.options.optionId;
  //       found = true;
  //       break;
  //     }
  //   }
  // }
};

SurveyStore.all = function() {
  let surveys = [];

  if (Object.keys(_surveys).size > 0) {
    Object.keys.forEach((key) => {
      surveys.push(_surveys[key]);
    });
  }

  return surveys;
};

SurveyStore.find = function(surveyId) {
  return _surveys[surveyId];
};

SurveyStore.allForUser = function(userId) {
  let userSurveys = [];
  let surveyIds = Object.keys(_surveys);

  if (surveyIds.length > 0) {
    surveyIds.forEach((surveyId) => {
      if (_surveys[surveyId].author_id === userId) {
        userSurveys.push(_surveys[surveyId]);
      }
    });
  }

  return userSurveys;
};

SurveyStore.__onDispatch = function(payload) {
  if (payload.actionType === QuestionConstants.QUESTION_REMOVED) {
  }
  switch (payload.actionType) {
    case SurveyConstants.SURVEYS_RECEIVED:
      _resetSurveys(payload.surveys);
      this.__emitChange();
      break;
    case SurveyConstants.SURVEY_RECEIVED:
      _addSurvey(payload.survey);
      this.__emitChange();
      break;
    case SurveyConstants.SURVEY_REMOVED:
      _removeSurvey(payload.id);
      this.__emitChange();
      break;
    case SurveyConstants.SURVEYS_REMOVED:
      _removeSurveys(payload.surveyIds);
      this.__emitChange();
      break;
    case SurveyConstants.SURVEY_UPDATED:
      _addSurvey(payload.survey);
      this.__emitChange();
      break;
    case QuestionConstants.QUESTION_REMOVED:
      _removeQuestion(payload.questionData);
      this.__emitChange();
      break;
    case OptionConstants.OPTION_REMOVED:
      _removeOption(payload.optionData);
      this.__emitChange();
      break;
  }
};

module.exports = SurveyStore;
