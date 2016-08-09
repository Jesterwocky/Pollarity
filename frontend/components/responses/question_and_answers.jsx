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
    // This should eventually be able to look up the user and question
    // and determine if they've voted before
    return({
      selectedOptionId: undefined
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

    let responses = ResponseStore.userResponsesToQuestion(
      SessionStore.currentUser().id,
      this.props.question.id
    );

    console.log(`User responses to question: ${responses}`);

    let mostRecentResponse = responses[responses.length - 1];

    console.log(`Most recent response: ${mostRecentResponse}`);

    this.setState({
      selectedOptionId: parseInt(mostRecentResponse)
    });
  },

  responses () {
    let responseElements = [];

    this.props.question.options.forEach((option, i) => {
      let isSelected = (option.id === this.state.selectedOptionId);
      console.log(`Option id: ${option.id}; selected option id: ${this.state.selectedOptionId}; isSelected = ${isSelected}`);

      responseElements.push(
        <li>
          <ResponseOption
            key={i}
            surveyId={this.props.question.id}
            option={option}
            selected={isSelected}
          />
        </li>
      );
    });

    return responseElements;
  },

  updateAnswer(optionId) {
    this.setState({
      selectedOptionId: optionId
    });
  },

  render() {
    return (
      <div className="question-and-answer-set">
        <h4 className="question-ask-text">{this.props.question.question}</h4>
        <ul>
          {this.responses()}
        </ul>
      </div>
    );
  }

});

module.exports = QuestionAndAnswers;
