const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const SurveyStore = require('../../stores/survey_store.js');
const SessionStore = require('../../stores/session_store.js');
const ResponseActions = require('../../actions/response_actions.js');

const ResponseOption = React.createClass({

  selectOption(e) {
    e.preventDefault();
    let optionId = this.props.option.id;

    ResponseActions.createSurveyResponse({
      responder_id: SessionStore.currentUser().id,
      selected_option_id: this.props.option.id
    });
  },

  render() {
    return(
      <div className="response-option" id={this.props.option.id}>
        <p onClick={this.selectOption} className="participant-option-text">
          {this.props.option.option}
        </p>
      </div>
    );
  }
});

module.exports = ResponseOption;
