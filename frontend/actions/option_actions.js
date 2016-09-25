const OptionApiUtil = require('../util/question_api_util.js');
const Dispatcher = require('../dispatcher/dispatcher.js');
const OptionConstants = require('../constants/question_constants.js');
const ErrorActions = require('../actions/error_actions.js');

module.exports = {

  deleteOption(optionId) {
    OptionApiUtil.deleteOption(
      optionId,
      this.removeOption,
      ErrorActions.setErrors
    );
  },

  deleteOptions(optionIds) {
    for (let optionId of optionIds) {
      OptionApiUtil.deleteOption(
        optionId,
        this.removeOption,
        ErrorActions.setErrors
      );
    }
  },

  // Callbacks
  removeOption(optionData) {
    Dispatcher.dispatch({
      actionType: OptionConstants.OPTION_REMOVED,
      optionId: optionData.id
    });
  }

};
