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

  openModal (e) {
    e.preventDefault();
    $(".modal").show();
  },

  closeModal(e) {
    e.preventDefault();
    $(".modal").hide();
  },

  userSurveyIndexItems () {
    return this.state.surveys.map((survey, i) => {
      return <UserSurveysIndexItem key={i} survey={survey}/>;
    });
  },

  render () {
    let buttonClasses = "index-side-button group";
    // let userSurveysClasses = "user-surveys-list group";

    return(
      <div id="user-surveys" className="group">
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
            <p className="content-indicator-icon">
              >
            </p>
          </div>
        </aside>

        <div className={"user-surveys-list group"}>
          {this.userSurveyIndexItems()}
        </div>

        <div className="modal">
          <div onClick={this.closeModal} className={"dark-overlay group"}></div>
          <CreateSurvey/>
        </div>

      </div>
    );
  }
});

module.exports = UserSurveysIndex;
