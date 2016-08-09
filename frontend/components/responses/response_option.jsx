const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const SurveyStore = require('../../stores/survey_store.js');
const SessionStore = require('../../stores/session_store.js');
const ResponseActions = require('../../actions/response_actions.js');

const ResponseOption = React.createClass({

  // componentDidMount() {
  //
  //   if (this.props.selected) {
  //     `$(#option-${this.props.option.id})`.addClass("currently-selected-option");
  //   }
  // },

  selectOption(e) {
    e.preventDefault();
    let optionId = this.props.option.id;
    console.log(`option-${this.props.option.id}`);

    $(`#option-${this.props.option.id}`).toggleClass("currently-selected-option");

    ResponseActions.createSurveyResponse({
      responder_id: SessionStore.currentUser().id,
      selected_option_id: this.props.option.id
    });
  },

  render() {
    let identifier = `option-${this.props.option.id}`;

    return(
      <div className="response-option" id={identifier}>
        <p onClick={this.selectOption} className="participant-option-text">
          {this.props.option.option}
        </p>
      </div>
    );
  }
});

module.exports = ResponseOption;
