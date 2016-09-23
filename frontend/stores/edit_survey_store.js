const Store           = require('flux/utils').Store;
const Dispatcher      = require('../dispatcher/dispatcher.js');
const SurveyConstants = require('../constants/survey_constants');

const EditSurveyStore = new Store(Dispatcher);

let _surveyToEdit;

const _resetSurvey = function (survey) {
  _surveyToEdit = survey;
};

const _clearSurvey = function (survey) {
  _surveyToEdit = undefined;
};

EditSurveyStore.getSurveyToEdit = function (survey) {
  let copySurvey = {};
  Object.assign(copySurvey, _surveyToEdit);
  return copySurvey;
};

EditSurveyStore.hasSurveyToEdit = function () {
  return _surveyToEdit === undefined ? false : true;
};

EditSurveyStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SurveyConstants.SURVEY_RECEIVED_FOR_EDIT:
      _resetSurvey(payload.survey);
      this.__emitChange();
      break;
    case SurveyConstants.CLEAR_SURVEY_TO_EDIT:
    case SurveyConstants.SURVEYS_RECEIVED:
    case SurveyConstants.SURVEY_RECEIVED:
    case SurveyConstants.SURVEY_REMOVED:
    case SurveyConstants.SURVEY_UPDATED:
      _clearSurvey();
      this.__emitChange();
      break;
  }
};

module.exports = EditSurveyStore;
