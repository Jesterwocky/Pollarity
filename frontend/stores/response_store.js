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

// Should be a function of survey id... How to get from option id to survey??
ResponseStore.answersToSurvey = function() {
  let selectedOptions = [];

  Object.keys(_responses).forEach((responseId) => {
    selectedOptions.push(_responses[responseId].selected_option_id);
  });

  return selectedOptions;
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
