const Dispatcher = require('../dispatcher/dispatcher.js');
const OptionConstants = require('../constants/question_constants.js');
const OptionApiUtil = require('../util/option_api_util.js');
const ErrorActions = require('../actions/error_actions.js');

module.exports = {

  deleteOption(optionId) {
    debugger
    OptionApiUtil.deleteOption(
      optionId,
      this.removeOption,
      ErrorActions.setErrors
    );
  },

  deleteOptions(optionIds) {
    for (let optionId of optionIds) {
      this.deleteOption(optionId);
    }
  },

  // Callbacks
  removeOption(optionData) {
    Dispatcher.dispatch({
      actionType: OptionConstants.OPTION_REMOVED,
      optionData: optionData
    });
  }
};
