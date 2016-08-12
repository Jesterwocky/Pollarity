const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');
const ResponseConstants = require('../constants/response_constants.js');

const ResponseStore = new Store(Dispatcher);

let _responses = {};

const _resetResponses = function(responses) {
  _responses = {};

  responses.forEach((response) => {
    _responses[response.id] = response;
  });

};

const _addResponse = function(response) {
  _responses[response.id] = response;
};

const _removeResponse = function(responseId) {
  delete _responses[responseId];
};

ResponseStore.answersToSurvey = function(surveyId) {
  let selectedOptions = [];

  Object.keys(_responses).forEach((responseId) => {
    if (_responses[responseId].question.survey.id === parseInt(surveyId))
    selectedOptions.push({
      questionId: _responses[responseId].question.id,
      optionId: _responses[responseId].selected_option_id
    });
  });

  return selectedOptions;
};

ResponseStore.answersToQuestion = function(questionId) {
  let questionAnswers = [];

  Object.keys(_responses).forEach((responseId) => {
    if (_responses[responseId].question.id === questionId) {
      questionAnswers.push(_responses[responseId]);
    }
  });

  return questionAnswers;
};

ResponseStore.userResponses = function(userId) {
  let userResponses = [];

  Object.keys(_responses).forEach((responseId) => {
    if (_responses[responseId].responder_id === userId) {
      userResponses.push(_responses[responseId].selected_option_id);
    }
  });

  return userResponses;
};

ResponseStore.userResponseToQuestion = function(userId, questionId) {
  let response = {};

  if (Object.keys(_responses).length > 0) {
    Object.keys(_responses).forEach((key) => {
      if (parseInt(_responses[key].question.id) === questionId) {
        response = {
          optionId: _responses[key].selected_option_id,
          responseId: _responses[key].id
        };
      }
    });
  }

  return response;
};

ResponseStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case ResponseConstants.RESPONSES_RECEIVED:
      _resetResponses(payload.responses);
      this.__emitChange();
      break;
    case ResponseConstants.RESPONSE_RECEIVED:
      _addResponse(payload.response);
      this.__emitChange();
      break;
    case ResponseConstants.RESPONSE_REMOVED:
      _removeResponse(payload.responseId);
      this.__emitChange();
      break;
  }
};

module.exports = ResponseStore;
