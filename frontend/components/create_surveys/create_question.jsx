const React = require('react');
const ReactDOM = require('react-dom');
const CreateOption = require('./create_option.jsx');


const CreateQuestion = React.createClass({

  getInitialState() {
    let answerOptions = [
      <CreateOption
        key={0}
        optionNum={0}
        deleteOption={this.deleteOption}
        updateOpt={this.updateOpt}
      />,
      <CreateOption
        key={1}
        optionNum={1}
        deleteOption={this.deleteOption}
        updateOpt={this.updateOpt}
      />
    ];

    return ({
      question: this.props.initialQuestionText,
      answerOptions: answerOptions,
      optionNum: 2,
      options: {}
    });
  },

  updateQuestion(e) {
    e.preventDefault();

    this.setState({
      question: e.currentTarget.value
    });

    this.props.updateQuestion(
      this.props.questionNum,
      {question: this.state.question, options: this.state.options}
    );
  },

  addOption(e) {
    e.preventDefault();

    let options = this.state.answerOptions.slice();

    options.push(
      <CreateOption
        key={this.state.optionNum}
        optionNum={this.state.optionNum}
        updateOpt={this.updateOpt}
        deleteOption={this.deleteOption}
      />
    );

    this.setState({
      answerOptions: options,
      optionNum: this.state.optionNum + 1
    });
  },

  updateOpt(optionNum, optionData) {
    this.state.options[optionNum] = optionData;
  },

  deleteOption(num) {
    let answerOptions = this.state.answerOptions;

    answerOptions.forEach((el, i) => {
      if (el.props.optionNum === num) {
        answerOptions.splice(i, 1);
      }
    });

    this.setState({
      answerOptions: answerOptions
    });
  },

  deleteThisQuestion(e) {
    e.preventDefault();
    this.props.deleteQuestion(this.props.questionNum);
  },

  focusOn (input) {
    if (input !== null){
      input.focus();
    }
  },

  render() {
    let questionContentClassnames = "question-content-box group";

    return (
      <div className="external-question-box">
        <a onClick={this.deleteThisQuestion} className="delete-question">X</a>

        <div className={questionContentClassnames}>
            <label>Question:</label>
            <input type="text"
              ref={this.focusOn}
              onChange={this.updateQuestion}
              value={this.state.question}/>

            <p className="audience-response-text">How will my audience respond?</p>

            <div className="answer-options-list">
              {this.state.answerOptions}
              <button onClick={this.addOption} className="add-option-button">
                Add an answer
              </button>
            </div>

        </div>

      </div>
    );
  }
});

module.exports = CreateQuestion;
