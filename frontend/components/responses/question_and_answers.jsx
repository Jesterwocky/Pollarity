const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const ResponseActions = require('../../actions/response_actions.js');
const SurveyStore = require('../../stores/survey_store.js');
const ResponseStore = require('../../stores/response_store.js');
const SessionStore = require('../../stores/session_store.js');
const ResponseOption = require('./response_option.jsx');

const QuestionAndAnswers = React.createClass({

  getInitialState() {
    let currentResponse = ResponseStore.userResponseToQuestion(
      SessionStore.currentUser().id,
      this.props.question.id
    );

    return({
      currentResponse: currentResponse
    });
  },

  componentDidMount() {
    this.responseListener = ResponseStore.addListener(this._handleResponseChange);
    ResponseActions.getResponsesByUser(SessionStore.currentUser().id);
  },

  componentWillUnmount() {
    this.responseListener.remove();
  },

  _handleResponseChange() {
    let currentResponse = ResponseStore.userResponseToQuestion(
      SessionStore.currentUser().id,
      this.props.question.id
    );

    this.setState({
      currentResponse: currentResponse
    });
  },

  selectableOptions () {
    let responseElements = [];

    this.props.question.options.forEach((option, i) => {
      responseElements.push(
        <li key={i}>
          <ResponseOption
            key={i}
            option={option}
            currentResponse={this.state.currentResponse}
          />
        </li>
      );
    });

    return responseElements;
  },

  render() {
    return (
      <div className="question-and-answer-set">
        <h4 className="question-ask-text">{this.props.question.question}</h4>
        <ul>
          {this.selectableOptions()}
        </ul>
      </div>
    );
  }

});

module.exports = QuestionAndAnswers;
