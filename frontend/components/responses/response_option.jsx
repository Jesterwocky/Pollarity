const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const SurveyStore = require('../../stores/survey_store.js');
const SessionStore = require('../../stores/session_store.js');
const ResponseActions = require('../../actions/response_actions.js');

const ResponseOption = React.createClass({

  getInitialState() {
    return({
      selected: false
    });
  },

  componentDidMount() {
    if (this.props.currentResponse !== undefined) {
      if (this.props.currentResponse.selected_option_id == this.props.option.id) {
        this.setState({
          selected: true
        });
      }
    }
  },

  selectResponse(e) {
    e.preventDefault();

    this.setState({
      selected: false
    });

    if (this.props.currentResponse.optionId == this.props.option.id) {
      ResponseActions.deleteResponse(this.props.currentResponse.responseId);
    }

    else if (this.props.currentResponse.optionId !== undefined) {
      this.setState({
        selected: true
      });

      ResponseActions.changeResponse(
        this.props.currentResponse.responseId,
        this.props.option.id
      );
    }

    else {
      this.setState({
        selected: true
      });
      
      ResponseActions.createResponse({
        responder_id: SessionStore.currentUser().id,
        selected_option_id: this.props.option.id
      });
    }
  },

  render() {
    let identifier = `option-${this.props.option.id}`;

    let classnames = "response-option";

    if (this.props.currentResponse !== undefined) {
      if(this.props.currentResponse.optionId == this.props.option.id) {
        classnames = classnames.concat(" currently-selected-option");
      }
    }

    return(
      <div className={classnames} id={identifier} onClick={this.selectResponse}>
        <p className="participant-option-text">
          {this.props.option.option}
        </p>
      </div>
    );
  }
});

module.exports = ResponseOption;
