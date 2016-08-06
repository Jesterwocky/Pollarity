const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;

const UserSurveysIndexItem = React.createClass({
  listQuestions() {

    return (
      <li>This will be one of many questions</li>
    );
  },

  render() {
    return (
      <div>
        <ul>
          <li>Survey title goes here</li>
          {this.listQuestions()}
        </ul>
      </div>
    );
  }
});

module.exports = UserSurveysIndexItem;
