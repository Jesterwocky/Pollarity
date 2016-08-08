const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const SurveyStore = require('../../stores/survey_store.js');

const ResponseOption = React.createClass({

  selectOption(e) {
    e.preventDefault();
    console.log("Will save response to the DB, linking userId and selected option");
  },

  render() {
    return(
      <div className="response-option">
        <p onClick={this.selectOption} className="participant-option-text">
          {this.props.option.option}
        </p>
      </div>
    );
  }
});

module.exports = ResponseOption;
