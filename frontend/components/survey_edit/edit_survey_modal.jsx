const React = require('react');
const CreateSurvey  = require('./create_survey.jsx');

const CreateSurveyModal = React.createClass({
  closeModal(e) {
    e.preventDefault();
    $(".modal").hide();
  },

  render() {
    return (
      <div className="modal">
        <div onClick={this.closeModal} className={"dark-overlay group"}></div>
        <CreateSurvey/>
      </div>
    );
  }
});

module.exports = CreateSurveyModal;
