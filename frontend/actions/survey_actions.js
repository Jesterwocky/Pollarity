const SurveyApiUtil = require('../util/survey_api_util.js');
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
      this.removeSurvey,
      ErrorActions.setErrors
    );
  },

  deleteSurveys(surveyIds) {
    for (let id of surveyIds) {
      SurveyApiUtil.deleteSurvey(
        surveyId,
        this.removeSurvey,
        ErrorActions.setErrors
      );
    }
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

  removeSurvey(surveyData) {
    Dispatcher.dispatch({
      actionType: SurveyConstants.SURVEY_REMOVED,
      surveyId: surveyData.id
    });
  },

  // removeSurveys(surveyIds) {
  //   Dispatcher.dispatch({
  //     actionType: SurveyConstants.SURVEYS_REMOVED,
  //     surveyIds: surveyIds
  //   });
  // },

  replaceSurvey(survey) {
    Dispatcher.dispatch({
      actionType: SurveyConstants.SURVEY_UPDATED,
      survey: survey
    });
  }
};
