const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const CreateSurveyButton = require('../../survey_creation/create_survey_button.jsx');
const UserSurveysButton = require('../../survey_index/user_surveys/user_surveys_button.jsx');

const SurveyCreatorOptions = React.createClass({
  render() {
    return(
      <ul className="nav-bar-survey-options">
        <li><CreateSurveyButton/></li>
        <li><UserSurveysButton/></li>
      </ul>
    );
  }
});

module.exports = SurveyCreatorOptions;
