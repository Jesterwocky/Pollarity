const React           = require('react');
const ReactDOM        = require('react-dom');
const hashHistory     = require('react-router').hashHistory;
const SurveyStore     = require('../../stores/survey_store.js');
const ResponseStore   = require('../../stores/response_store.js');
const ResponseActions = require('../../actions/response_actions.js');
const OptionDisplay   = require('./option_display.jsx');

const QuestionReport = React.createClass({

  _tallyVotes(option) {
    let tally = 0;

    this.props.votes.forEach((vote) => {
      if (vote === option.id) {
        tally += 1;
      }
    });

    return tally;
  },

  optionDisplays() {
    let displays = [];

    this.props.question.options.forEach((option, i) => {

      displays.push(
        <OptionDisplay
          key={i}
          option={option}
          totalQuestionVotes={this.props.votes.length}
          optionTally={this._tallyVotes(option)}
          totalOptions={this.props.question.options.length}
        />
      );
    });

    return displays;
  },

  render() {
    return(
      <div className={"question-report group"}>
        <h2>{this.props.question.question}</h2>
          <div className="poll-results-display-window group">
            {this.optionDisplays()}
          </div>
      </div>
    );
  }
});

module.exports = QuestionReport;
