const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const SurveyStore = require('../../stores/survey_store.js');
const ResponseOption = require('./response_option.jsx');

const QuestionAndAnswers = React.createClass({

  getInitialState() {
    // This should eventually be able to look up the user and question
    // and determine if they've voted before
    return({
      selectedOptionId: undefined
    });
  },

  responses () {
    let responseElements = [];

    this.props.question.options.forEach((option, i) => {
      let isSelected = (option.id === this.state.selectedOptionId);

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
