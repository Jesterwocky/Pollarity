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
      question: "",
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
      <CreateOption key={optionNum}/>
    );

    this.setState({
      answerOptions: options,
      optionNum: this.state.optionNum + 1
    });
  },

  render() {
    return (
      <div >

        <div className="question-content-box">
          <label>Question:</label>
          <input type="text" onChange={this.updateQuestion} value={this.props.questionText}/>
        </div>

        <div className="answer-options-list">
          {this.state.answerOptions}
        </div>

        <button
          onClick={this.addOption}
          value="Add Answer"
          className="add-option-button"
        />

      </div>
    );
  }
});

module.exports = CreateQuestion;
