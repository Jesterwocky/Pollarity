const React = require('react');
const EditSurvey  = require('./edit_survey.jsx');
const SurveyStore = require('../../stores/survey_store.js');
const SurveyActions = require('../../actions/survey_actions.js');
const EditSurveyStore = require('../../stores/edit_survey_store.js');

// Need survey edit store

const EditSurveyModal = React.createClass({
  stopEdit(e) {
    e.preventDefault();
    SurveyActions.clearSurveyToEdit();
  },

  render() {
    return (
      <div className="edit-survey-modal">
        <div onClick={this.stopEdit} className={"edit-survey-modal-dark-overlay group"}></div>
        <EditSurvey/>
      </div>
    );
  }
});

module.exports = EditSurveyModal;
