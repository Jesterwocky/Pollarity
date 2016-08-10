const React           = require('react');
const ReactDOM        = require('react-dom');
const hashHistory     = require('react-router').hashHistory;

const OptionDisplay = React.createClass({

  render() {
    let percentage = `${100 * (this.props.optionTally / this.props.totalQuestionVotes)}%`;

    let percentageBasedSettings = {
      width: `${percentage}`
    };

    return (
      <div className={"option-display group"}>
        <div className={"option-vote-percentage group"} style={percentageBasedSettings}>
          <h3>{this.props.option.option}</h3>
          <small className="option-percent-text">{percentage}</small>
        </div>
      </div>
    );
  }
});

module.exports = OptionDisplay;
