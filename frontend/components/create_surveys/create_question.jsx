const React = require('react');
const ReactDOM = require('react-dom');
const CreateOption = require('./create_option.jsx');


const CreateQuestion = React.createClass({

  getInitialState() {
    let answerOptions = [
      <CreateOption key={0}/>,
      <CreateOption key={1}/>
    ];

    return ({
      question: this.props.questionText,
      answerOptions: answerOptions,
      optionNum: 2
    });
  },

  updateQuestion(e) {
    e.preventDefault();
    this.setState({
      question: e.currentTarget.value
    });
  },

  addOption(e) {
    e.preventDefault();

    let options = this.state.answerOptions.slice();

    options.push(
      <CreateOption key={this.state.optionNum}/>
    );

    this.setState({
      answerOptions: options,
      optionNum: this.state.optionNum + 1
    });
  },

  deleteQuestion(e) {
    e.preventDefault();
    console.log("Question will be deleted!");
    this.props.deleteQuestion(this.props.questionNum);
  },

  focusOn (input) {
    input.focus();
  },

  render() {
    let questionContentClassnames = "question-content-box group";

    return (
      <div className="external-question-box">
        <a onClick={this.deleteQuestion} className="delete-question">X</a>

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
