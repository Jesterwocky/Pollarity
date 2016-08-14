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
        updateOption={this.updateOption}
      />,
      <CreateOption
        key={1}
        optionNum={1}
        deleteOption={this.deleteOption}
        updateOption={this.updateOption}
      />
    ];

    return ({
      question: this.props.initialQuestionText,
      answerOptions: answerOptions,
      optionNum: 2,
      options_attributes: {}
    });
  },

  updateQuestion(e) {
    e.preventDefault();

    this.setState({
      question: e.currentTarget.value
    });

    this.props.updateQuestion(
      this.props.questionNum,
      {question: e.currentTarget.value, options_attributes: this.state.options_attributes}
    );
  },

  addOption(e) {
    e.preventDefault();

    let options = this.state.answerOptions.slice();

    options.push(
      <CreateOption
        key={this.state.optionNum}
        optionNum={this.state.optionNum}
        updateOption={this.updateOption}
        deleteOption={this.deleteOption}
      />
    );

    this.setState({
      answerOptions: options,
      optionNum: this.state.optionNum + 1
    });
  },

  updateOption(optionNum, optionData) {

    this.state.options_attributes[optionNum] = optionData;
    // let options = {};
    //
    // Object.keys(this.state.options_attributes).forEach((key) => {
    //   options[key] = this.state.options_attributes[key];
    // });
    //
    // options[optionNum] = optionData;
    //
    // this.setState({
    //   options: options
    // });
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
