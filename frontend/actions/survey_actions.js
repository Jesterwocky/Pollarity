const SurveyApiUtil = require('../util/survey_api_util.js');
const LoginConstants = require('../constants/login_constants.js');
const Dispatcher = require('../dispatcher/dispatcher.js');
const SurveyConstants = require('../constants/survey_constants.js');

module.exports = {

  createSurvey(surveyData) {
    SurveyApiUtil.createSurvey(surveyData, this.receiveSurvey);
  },

  allSurveys() {
    SurveyApiUtil.allSurveys(this.receiveSurveys);
  },

  userSurveys(userId) {
    SurveyApiUtil.userSurveys(userId, this.receiveSurveys);
  },

  getSurvey(surveyId) {
    SurveyApiUtil.getSurvey(surveyId, this.receiveSurvey);
  },

  deleteSurvey(surveyId) {
    SurveyApiUtil.deleteSurvey(surveyId, this.receiveSurvey);
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

  removeSurvey(surveyId) {
    Dispatcher.dispatch({
      actionType: SurveyConstants.SURVEY_REMOVED,
      surveyId: surveyId
    });
  }
};
