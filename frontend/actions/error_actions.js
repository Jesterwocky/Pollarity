const SessionAPIUtil = require('../util/session_api_util.js');
const ErrorConstants = require('../constants/error_constants.js');
const Dispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
  setErrors(form, errors) {
    Dispatcher.dispatch({
      actionType: ErrorConstants.SET_ERRORS,
      form: form,
      errors: errors
    });
  },

  clearErrors(errors) {
    Dispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS
    });
  }
};
