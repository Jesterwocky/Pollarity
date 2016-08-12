const ResponseApiUtil = require('../util/response_api_util.js');
const LoginConstants = require('../constants/login_constants.js');
const Dispatcher = require('../dispatcher/dispatcher.js');
const ResponseConstants = require('../constants/response_constants.js');

module.exports = {
  // create
  createResponse(responseData) {
    ResponseApiUtil.createResponse(responseData, this.receiveSurveyResponse);
  },

  // read
  getResponsesByUser(userId) {
    ResponseApiUtil.responsesByUser(userId, this.receiveSurveyResponses);
  },

  surveyResponses(surveyId) {
    ResponseApiUtil.surveyResponses(surveyId, this.receiveSurveyResponses);
  },

  // update
  changeResponse(responseId, newOptionId) {
    ResponseApiUtil.changeResponse(responseId, newOptionId, this.receiveSurveyResponse);
  },

  // delete
  deleteResponse(responseId) {
    ResponseApiUtil.deleteResponse(responseId, this.removeSurveyResponse);
  },

  // callbacks
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
