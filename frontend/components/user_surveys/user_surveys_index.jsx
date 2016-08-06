const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const SurveyStore = require('../../stores/survey_store.js');
const SurveyActions = require('../../actions/survey_actions.js');
const UserSurveysIndexItem = require('./user_surveys_index_item.jsx');

const UserSurveysIndex = React.createClass({
  getInitialState() {
    let userId = parseInt(this.props.params.userId);

    return ({
      surveys: SurveyStore.allForUser(userId),
      userId: userId
    });
  },

  componentWillMount () {
    this.listener = SurveyStore.addListener(this._handleSurveyChange);
    SurveyActions.userSurveys(this.state.userId);
  },

  _handleSurveyChange () {
    this.setState({
      surveys: SurveyStore.allForUser(this.state.userId)
    });
  },

  newPoll (e) {
    e.preventDefault();
    console.log("New post will be created!");
  },

  userSurveyIndexItems () {
    return this.state.surveys.map((survey) => {
      return <UserSurveysIndexItem survey={survey}/>;
    });
  },

  render () {
    return(
      <div id="user-surveys" className="group">
        <button onClick={this.newPoll} className="create-polls-from-index-button"/>
        <aside>My Polls</aside>
        {this.userSurveyIndexItems()}
      </div>
    );
  }
});

module.exports = UserSurveysIndex;
