const React           = require('react');
const ReactDOM        = require('react-dom');
const hashHistory     = require('react-router').hashHistory;

const OptionDisplay = React.createClass({

  render() {
    let percentage = 0;

    if (this.props.totalQuestionVotes.length > 0) {
      let percentage = 100 * (this.props.optionTally / this.props.totalQuestionVotes);
    }

    let percentageBasedSettings = {
      width: `${percentage}%`
    };

    return (
      <div className={"option-display group"}>
        <div className="percent-bar-overlay">
          <h3>{this.props.option.option}</h3>
          <p className={"option-percent-text group"}>{percentage}%</p>
        </div>
        <div className={"option-vote-percentage group"} style={percentageBasedSettings}></div>
      </div>
    );
  }
});

module.exports = OptionDisplay;
