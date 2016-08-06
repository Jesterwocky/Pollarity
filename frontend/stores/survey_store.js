const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');
const SurveyConstants = require('../constants/survey_constants.js');

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

SurveyStore.all = function() {
  let surveys = [];

  if (Object.keys(_surveys).size > 0) {
    Object.keys.forEach((key) => {
      surveys.push(_surveys[key]);
    });
  }

  return surveys;
};

SurveyStore.allForUser = function(userId) {
  let userSurveys = [];

  Object.keys(_surveys).forEach((key) => {
    if (parseInt(key) === userId) {
      userSurveys.push(_surveys[key]);
    }
  });

  return userSurveys;
};

// SurveyStore.surveyQuestions = function(surveyId) {
//   let survey = _surveys[surveyId];
//
// };

SurveyStore.__onDispatch = function(payload) {
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
      _removeSurvey(payload.surveyId);
      this.__emitChange();
      break;
  }
};

module.exports = SurveyStore;
