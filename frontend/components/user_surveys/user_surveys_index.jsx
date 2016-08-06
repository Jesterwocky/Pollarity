const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const SurveyStore = require('../../stores/survey_store.js');
const SurveyActions = require('../../actions/survey_actions.js');
const UserSurveysIndexItem = require('./user_surveys_index_item.jsx');
const CreateSurvey = require('../create_surveys/create_survey.jsx');

const UserSurveysIndex = React.createClass({
  getInitialState() {
    let userId = parseInt(this.props.params.userId);

    return ({
      surveys: SurveyStore.allForUser(userId),
      userId: userId
    });
  },

  //ComponentWillMount?
  componentDidMount () {
    this.listener = SurveyStore.addListener(this._handleSurveyChange);
    SurveyActions.userSurveys(this.state.userId);
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  _handleSurveyChange () {
    this.setState({
      surveys: SurveyStore.allForUser(this.state.userId)
    });
  },

  newPoll (e) {
    e.preventDefault();
    console.log("New poll will be created!");
  },

  userSurveyIndexItems () {
    return this.state.surveys.map((survey) => {
      return <UserSurveysIndexItem survey={survey}/>;
    });
  },

  render () {
    let buttonClasses = "index-side-button group";
    let userSurveysClasses = "user-surveys-list group";

    return(
      <div id="user-surveys" className="group">
        <aside id="user-surveys-left-menu" className="left-menu">
          <button
            onClick={this.newPoll}
            id="create-polls-from-index-button"
            className={buttonClasses}>
            Create
          </button>

          <div id="my-polls-linklike" className={buttonClasses}>
            <p className="my-polls-text">
              My Polls
            </p>
            <p className="content-indicator-icon">
              >
            </p>
          </div>
        </aside>

        <div className={userSurveysClasses}>
          {this.userSurveyIndexItems()}
        </div>

        <CreateSurvey/>
      </div>
    );
  }
});

module.exports = UserSurveysIndex;
