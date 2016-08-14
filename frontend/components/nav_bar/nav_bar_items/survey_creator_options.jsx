const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const CreateSurveyButton = require('../../survey_creation/create_survey_button.jsx');
const UserSurveysButton = require('../../nav_bar/nav_bar_items/user_surveys_button.jsx');


const SurveyOptions = React.createClass({
  render() {
    return(
      <ul className="nav-bar-survey-options">
        <li><CreateSurveyButton/></li>
        <li><UserSurveysButton/></li>
      </ul>
    );
  }
});
