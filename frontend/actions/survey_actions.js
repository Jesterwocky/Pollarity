const SurveyApiUtil = require('../util/survey_api_util.js');
const LoginConstants = require('../constants/login_constants.js');
const Dispatcher = require('../dispatcher/dispatcher.js');
const SurveyConstants = require('../constants/survey_constants.js');
const ErrorActions = require('../actions/error_actions.js');

module.exports = {

  createSurvey(surveyData) {
    SurveyApiUtil.createSurvey(
      surveyData,
      this.receiveSurvey,
      ErrorActions.setErrors
    );
  },

  allSurveys() {
    SurveyApiUtil.allSurveys(
      this.receiveSurveys,
      ErrorActions.setErrors
    );
  },

  userSurveys(userId) {
    SurveyApiUtil.userSurveys(
      userId,
      this.receiveSurveys,
      ErrorActions.setErrors
    );
  },

  getSurvey(surveyId) {
    SurveyApiUtil.getSurvey(
      surveyId,
      this.receiveSurvey,
      ErrorActions.setErrors
    );
  },

  getSurveyToEdit(surveyId) {
    SurveyApiUtil.getSurveyToEdit(
      surveyId,
      this.receiveSurveyToEdit,
      ErrorActions.setErrors
    );
  },

  deleteSurvey(surveyId) {
    SurveyApiUtil.deleteSurvey(
      surveyId,
      this.receiveSurvey,
      ErrorActions.setErrors
    );
  },

  updateSurvey(surveyData) {
    SurveyApiUtil.updateSurvey(
      surveyData,
      this.replaceSurvey,
      ErrorActions.setErrors
    );
  },

  // Callbacks
  receiveSurveys(surveys) {
    Dispatcher.dispatch({
      actionType: SurveyConstants.SURVEYS_RECEIVED,
      surveys: surveys
    });
  },

  receiveSurvey(survey) {
    Dispatcher.dispatch({
      actionType: SurveyConstants.SURVEY_RECEIVED,
      survey: survey
    });
  },

  receiveSurveyToEdit(survey) {
    Dispatcher.dispatch({
      actionType: SurveyConstants.SURVEY_RECEIVED_FOR_EDIT,
      survey: survey
    });
  },

  clearSurveyToEdit() {
    Dispatcher.dispatch({
      actionType: SurveyConstants.CLEAR_SURVEY_TO_EDIT,
    });
  },

  removeSurvey(surveyId) {
    Dispatcher.dispatch({
      actionType: SurveyConstants.SURVEY_REMOVED,
      surveyId: surveyId
    });
  },

  replaceSurvey(survey) {
    Dispatcher.dispatch({
      actionType: SurveyConstants.SURVEY_UPDATED,
      survey: survey
    });
  }
};
