const React         = require('react');
const ReactDOM      = require('react-dom');
const hashHistory   = require('react-router').hashHistory;
const SurveyStore   = require('../../../stores/survey_store.js');
const SurveyActions = require('../../../actions/survey_actions.js');
// const CreateSurvey  = require('../../survey_creation/create_survey.jsx');
const NavBarForPollCreator = require('../../nav_bar/nav_bar_for_poll_creator.jsx');
const UserSurveysIndexItem = require('./user_surveys_index_item.jsx');
const CreateSurveyModal = require('../../survey_creation/create_survey_modal.jsx');

const UserSurveysIndex = React.createClass({
  getInitialState() {
    let userId = parseInt(this.props.params.userId);

    return ({
      surveys: SurveyStore.allForUser(userId),
      userId: userId
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
    this.setState({
      surveys: SurveyStore.allForUser(this.state.userId)
    });
  },

  openModal (e) {
    e.preventDefault();
    $(".modal").show();
  },

  userSurveyIndexItems () {
    return this.state.surveys.map((survey, i) => {
      return <UserSurveysIndexItem key={i} survey={survey}/>;
    });
  },

  render () {
    let buttonClasses = "index-side-button group";

    return(
      <div id="user-surveys" className="group">
        <NavBarForPollCreator/>
        <aside id="user-surveys-left-menu" className="left-menu">

          <button
            onClick={this.openModal}
            id="create-polls-from-index-button"
            className={buttonClasses}>
            Create
          </button>

          <div id="my-polls-linklike" className={buttonClasses}>
            <p className="my-polls-text">
              My Polls
            </p>
          </div>

        </aside>

        <div className={"user-surveys-list group"}>
          {this.userSurveyIndexItems()}
        </div>

        <CreateSurveyModal/>
      </div>
    );
  }
});

module.exports = UserSurveysIndex;
