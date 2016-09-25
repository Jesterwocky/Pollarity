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

const _removeSurvey = function(surveyData) {
  delete _surveys[surveyData.id];
};

const _removeQuestion = function(questionData) {
  let questionId = questionData.id;
  let surveyId = questionData.surveyId;
  let questions = _surveys[surveyId].questions;

  for (let questionNum of Object.keys(questions)) {
    if (questions[questionNum].id === questionId) {
      delete _surveys[surveyId].questions[questionNum];
      break;
    }
  }
};

const _removeOption = function(optionData) {
  let optionId = optionData.id;
  let surveyId = optionData.surveyId;
  let questionId = optionData.questionId;
  let questions = _surveys[surveyId].questions;

  let found = false;

  for (let questionNum of Object.keys(questions)) {
    if (questions[questionNum].id === questionId) {
      if (found) break;
      options = questions[questionNum].options;
      for (let optionNum of Object.keys(options)) {
        if (options[optionNum].id === optionId) {
          delete _surveys[surveyId].questions[questionNum].options[optionNum];
          found = true;
          break;
        }
      }
    }
  }
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
    case SurveyConstants.SURVEY_UPDATED:
      _addSurvey(payload.survey);
      this.__emitChange();
      break;
    case SurveyConstants.SURVEY_REMOVED:
      _removeSurvey(payload.surveyData);
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
