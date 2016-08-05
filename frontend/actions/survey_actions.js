const SurveyAPIUtil = require('../util/survey_api_util.js');
const LoginConstants = require('../constants/login_constants.js');
const Dispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
  allSurveys() {
    SurveyApiUtil.allSurveys(this.receiveSurveys);
  },

  userSurveys(userId) {
    SurveyApiUtil.userSurveys(userId, this.receiveSurvey);
  },

  createSurvey(surveyData) {
    SurveyApiUtil.createSurvey(surveyData, this.receiveSurvey);
  },

  deleteSurvey(surveyId) {
    SurveyApiUtil.deleteSurvey(surveyId, this.receiveSurvey);
  },

  receiveSurveys(surveys) {
    Dispatcher.dispatch({
      actionType: SurveyConstants.SURVEYS_RECEIVED,
      surveys: surveys
    });
  },

  receiveSurvey(survey) {
    Dispatcher.dispatch({
      actionType: SurveyConstants.SURVEYS_RECEIVED,
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
