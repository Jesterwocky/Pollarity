const React           = require('react');
const ReactDOM        = require('react-dom');
const hashHistory     = require('react-router').hashHistory;

const OptionDisplay = React.createClass({

  render() {
    return (
      <div className="poll-results-display group">
        <div className="option-display group">
          <h3>{this.props.option.option}</h3>
          <div>
            Vote percentage will be displayed here.
          </div>
        </div>
      </div>
    );
  }
});

module.exports = OptionDisplay;
