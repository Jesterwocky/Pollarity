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
  //     $(`#option-${this.props.option.id}`).addClass("currently-selected-option");
  //   }
  // },

  selectOption(e) {
    e.preventDefault();
    let optionId = this.props.option.id;

    ResponseActions.createSurveyResponse({
      responder_id: SessionStore.currentUser().id,
      selected_option_id: this.props.option.id
    });
  },

  render() {
    let identifier = `option-${this.props.option.id}`;
    let classnames = "response-option";

    if (this.props.selected) {
      classnames = "response-option currently-selected-option";
    }

    return(
      <div className={classnames} id={identifier} onClick={this.selectOption}>
        <p className="participant-option-text">
          {this.props.option.option}
        </p>
      </div>
    );
  }
});

module.exports = ResponseOption;
