const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;

const CreateSurveyButton = React.createClass({

  openModal (e) {
    e.preventDefault();
    $(".modal").show();
  },

  render() {
    return (
      <a href="" onClick={this.openModal} id="add-poll-link">+</a>
    );
  }
});

module.exports = CreateSurveyButton;
