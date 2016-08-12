const React           = require('react');
const ReactDOM        = require('react-dom');
const hashHistory     = require('react-router').hashHistory;

const OptionDisplay = React.createClass({

  imageOption() {
    if (this.props.option.image_url !== undefined) {
      return(
        <img src={this.props.option.image_url} className="report-image"/>
      );
    }
  },

  render() {
    let percentage = 0;

    if (this.props.totalQuestionVotes > 0) {
      percentage = 100 * (this.props.optionTally / this.props.totalQuestionVotes);
    }

    let percentageBasedSettings = {
      width: `${percentage}%`
    };

    return (
      <div className={"option-display group"}>
        {this.imageOption()}
        <div className="percent-bar-overlay">
          <h3>{this.props.option.option}</h3>
          <p className={"option-percent-text group"}>{Number((percentage).toFixed(1))}%</p>
        </div>
        <div className={"option-vote-percentage group"} style={percentageBasedSettings}></div>
      </div>
    );
  }
});

module.exports = OptionDisplay;
