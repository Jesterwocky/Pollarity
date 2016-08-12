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
      <div id={this.props.question.question} className={"question-report group"}>
        <h2>{this.props.question.question}</h2>
          <div className={"poll-results-display-window group"}>
            <div className={"poll-results-inner group"}>
              {this.optionDisplays()}
            </div>
            <div className={"under-graph-markings"}>
              <small id={"0"} className={"marking"}></small>
              <small id={"10"} className={"marking"}></small>
              <small id={"20"} className={"marking"}></small>
              <small id={"30"} className={"marking"}></small>
              <small id={"40"} className={"marking"}></small>
              <small id={"50"} className={"marking"}></small>
              <small id={"60"} className={"marking"}></small>
              <small id={"70"} className={"marking"}></small>
              <small id={"80"} className={"marking"}></small>
              <small id={"90"} className={"marking"}></small>
              <small id={"100"} className={"marking"}></small>
            </div>
          </div>
          <p className="total-question-votes">Total votes: {this.props.votes.length}</p>
      </div>
    );
  }
});

module.exports = QuestionReport;
