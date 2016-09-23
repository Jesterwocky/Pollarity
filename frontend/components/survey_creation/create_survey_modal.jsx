const React = require('react');
const CreateSurvey  = require('./create_survey.jsx');

const CreateSurveyModal = React.createClass({
  closeNewSurveyModal(e) {
    e.preventDefault();
    $(".new-survey-modal").hide();
  },

  render() {
    return (
      <div className="new-survey-modal">
        <div onClick={this.closeNewSurveyModal} className={"new-survey-modal-dark-overlay group"}></div>
        <CreateSurvey/>
      </div>
    );
  }
});

module.exports = CreateSurveyModal;
