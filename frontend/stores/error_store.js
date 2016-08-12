const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');
const ErrorConstants = require('../constants/error_constants.js');

let _currentForm = "";
let _errors = [];

const _setErrors = function(form, errors) {
  _currentForm = form;
  _errors = errors;
};

const _clearErrors = function() {
  _currentForm = "";
  _errors = [];
};

const ErrorStore = new Store(Dispatcher);

ErrorStore.errors = function(form) {
  if (_currentForm === form) {
    return _errors.slice(0);
  }
};

ErrorStore.__onDispatch = function(payload) {

  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      _setErrors(payload.form, payload.errors);
      this.__emitChange();
      break;

    case ErrorConstants.CLEAR_ERRORS:
      _clearErrors();
      this.__emitChange();
      break;
  }
};

module.exports = ErrorStore;
