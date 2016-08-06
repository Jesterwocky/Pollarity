const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;

const SurveyStore = require('../../../stores/survey_store.js');
const SurveyActions = require('../../../actions/survey_actions.js');
const hashHistory = require('react-router').hashHistory;

const CreateQuestion = React.createClass({

  updateQuestion(e) {
    e.preventDefault();
    this.props.addQuestion(this.state.question);
  },

  render() {
    return (
      <div >
        <div>
          <ul>
            <li>Question</li>
            <li>Survey</li>
          </ul>
        </div>

        <div className="question-content-box">
          <label>Question:</label>
          <input type="text" onChange={this.updateQuestion} value={this.props.questionText}/>

        </div>

      </div>
    );
  }
});
