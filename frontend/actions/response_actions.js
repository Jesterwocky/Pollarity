const ResponseApiUtil = require('../util/response_api_util.js');
const LoginConstants = require('../constants/login_constants.js');
const Dispatcher = require('../dispatcher/dispatcher.js');
const ResponseConstants = require('../constants/response_constants.js');

module.exports = {
  getResponsesByUser(userId) {
    ResponseApiUtil.responsesByUser(userId, this.receiveSurveyResponses);
  },

  createSurveyResponse(responseData) {
    ResponseApiUtil.createSurveyResponse(responseData, this.receiveSurveyResponse);
  },

  surveyResponses(surveyId) {
    ResponseApiUtil.surveyResponses(surveyId, this.receiveSurveyResponses);
  },

  changeSurveyResponse(surveyData) {
    ResponseApiUtil.changeSurveyResponse(surveyData, this.receiveSurveyResponse);
  },

  deleteSurveyResponse(responseId) {
    ResponseApiUtil.deleteSurveyResponse(responseId, this.removeSurveyResponse);
  },

  receiveSurveyResponses(responses) {
    Dispatcher.dispatch({
      actionType: ResponseConstants.RESPONSES_RECEIVED,
      responses: responses
    });
  },

  receiveSurveyResponse(response) {
    
    Dispatcher.dispatch({
      actionType: ResponseConstants.RESPONSE_RECEIVED,
      response: response
    });
  },

  removeSurveyResponse(responseId) {
    Dispatcher.dispatch({
      actionType: ResponseConstants.RESPONSE_REMOVED,
      responseId: responseId
    });  }
};
