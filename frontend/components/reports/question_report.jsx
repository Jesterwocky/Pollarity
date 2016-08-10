const React           = require('react');
const ReactDOM        = require('react-dom');
const hashHistory     = require('react-router').hashHistory;
const SurveyStore     = require('../../stores/survey_store.js');
const ResponseStore   = require('../../stores/response_store.js');
const ResponseActions = require('../../actions/response_actions.js');
const OptionDisplay   = require('./option_display.jsx');

const QuestionReport = React.createClass({

  componentDidMount() {

  },

  optionDisplays() {
    let displays = [];

    this.props.question.options.forEach((option) => {
      displays.push(
        <OptionDisplay
          option={option}
        />
      );
    });

    return displays;
  },

  render() {
    return(
      <div className={"question-report group"}>
        <h2>{this.props.question.question}</h2>
          <div className="poll-results-display group">
            {this.optionDisplays()}
          </div>
      </div>
    );
  }
});

module.exports = QuestionReport;
