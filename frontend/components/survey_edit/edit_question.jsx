const React        = require('react');
const ReactDOM     = require('react-dom');
const EditOption   = require('./edit_option.jsx');
const CreateOption = require('../survey_creation/create_option.jsx');


const EditQuestion = React.createClass({

  getInitialState() {
    if (this.props.options.length > 0) {
      let answerOptions = [];
      let options_attributes = {};
      let key = 0;

      for (let option of this.props.options) {
        options_attributes[key] = {};

        answerOptions.push(
          <EditOption
            id={option.id}
            key={key}
            optionNum={key}
            deleteOption={this.deleteOption}
            updateOption={this.updateOption}
            initialOption={option.option}
            initialImage_url={option.image_url === null ? undefined : option.image_url}
            initialThumbnail_url={option.thumbnail_url === null ? undefined : option.thumbnail_url}
          />
        );

        key += 1;
      }

      return ({
        question: this.props.initialQuestionText,
        answerOptions: answerOptions,
        optionNum: key,
        options_attributes: options_attributes,
        optionIdsToDelete: []
      });
    }

    else {
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
    }
  },

  componentDidMount() {
    // This points edit_survey to the options_attributes. Doing this
    // for all questions at the beginning, rather than calling
    // this.props.updateQuestion every time an option is updated
    this.props.updateQuestion(
      this.props.questionNum,
      {id: this.props.id, question: this.props.question, options_attributes: this.state.options_attributes}
    );
  },

  updateQuestion(e) {
    e.preventDefault();

    this.setState({
      question: e.currentTarget.value
    });

    this.props.updateQuestion(
      this.props.questionNum,
      {id: this.props.id, question: e.currentTarget.value, options_attributes: this.state.options_attributes}
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
    debugger
    this.state.options_attributes[optionNum] = optionData;
  },

  deleteOption(num, id) {
    let answerOptions = this.state.answerOptions;

    answerOptions.forEach((el, i) => {
      if (el.props.optionNum === num) {
        answerOptions.splice(i, 1);
      }
    });

    if (id !== undefined) {
      this.props.setOptionToDelete(id);
    }

    this.setState({
      answerOptions: answerOptions
    });
  },

  deleteThisQuestion(e) {
    e.preventDefault();

    if (this.props.hasVotes) {
      if (confirm(`WARNING: participants have already voted on this question. Are you sure you want to delete it?`)) {
        this.props.deleteQuestion(this.props.questionNum, this.props.id);
      }
    }

    else {
      this.props.deleteQuestion(this.props.questionNum, this.props.id);
    }
  },

  focusOn (input) {
    if (input !== null){
      input.focus();
    }
  },

  render() {
    return (
      <div className="external-question-box">
        <a onClick={this.deleteThisQuestion} className="delete-question">&times;</a>

        <div className="question-content-box group">
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

module.exports = EditQuestion;
