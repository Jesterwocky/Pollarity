const React         = require('react');
const ReactDOM      = require('react-dom');
const hashHistory   = require('react-router').hashHistory;
const SurveyStore   = require('../../../stores/survey_store.js');
const SurveyActions = require('../../../actions/survey_actions.js');
// const CreateSurvey  = require('../../survey_creation/create_survey.jsx');
const NavBarForPollCreator = require('../../nav_bar/nav_bar_for_poll_creator.jsx');
const UserSurveysIndexItem = require('./user_surveys_index_item.jsx');
const CreateSurveyModal = require('../../survey_creation/create_survey_modal.jsx');
const EditSurvey = require('../../survey_edit/edit_survey_modal');
const EditSurveyModal = require('../../survey_edit/edit_survey_modal');

const UserSurveysIndex = React.createClass({
  getInitialState() {
    let userId = parseInt(this.props.params.userId);

    return ({
      userId: userId,
      surveys: SurveyStore.allForUser(userId),
    });
  },

  componentDidMount () {
    this.listener = SurveyStore.addListener(this._handleSurveyChange);
    SurveyActions.userSurveys(this.state.userId);
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  _handleSurveyChange () {
    const AUTH_TOKEN = $('meta[name=csrf-token]').attr('content');
    console.log(`Option API ${AUTH_TOKEN}`);
    this.setState({
      surveys: SurveyStore.allForUser(this.state.userId),
    });
  },

  openNewSurveyModal (e) {
    e.preventDefault();
    $(".new-survey-modal").show();
  },

  userSurveyIndexItems () {
    return this.state.surveys.map((survey, i) => {
      return (
        <UserSurveysIndexItem
          key={i}
          survey={survey}
        />
      );
    });
  },

  render () {
    let buttonClasses = "index-side-button group";

    return(
      <div id="user-surveys" className="group">
        <NavBarForPollCreator/>
        <aside id="user-surveys-left-menu" className="left-menu">

          <button
            onClick={this.openNewSurveyModal}
            id="create-polls-from-index-button"
            className={buttonClasses}>
            Create
          </button>

          <div id="my-polls-linklike" className={buttonClasses}>
            <div className="my-polls-text">
              My Polls
            </div>

            <div className="arrow">&rarr;</div>
          </div>

        </aside>

        <div className={"user-surveys-list group"}>
          {this.userSurveyIndexItems().reverse()}
        </div>

        <EditSurveyModal/>

        <CreateSurveyModal/>
      </div>
    );
  }
});

module.exports = UserSurveysIndex;
