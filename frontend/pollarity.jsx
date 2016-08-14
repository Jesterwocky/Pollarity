const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const Home = require('./components/home.jsx');
const Login = require('./components/user_auth/login/login.jsx');
const UserSettings = require('./components/user_auth/logged_in_options/user_settings.jsx');
const SessionActions = require('./actions/session_actions.js');
// const Signup = require('./components/user_auth/signup/signup.jsx');
const CreateAccount = require('./components/user_auth/signup/create_account.jsx');
const UserSurveysIndex = require('./components/survey_index/user_surveys/user_surveys_index.jsx');
const SessionStore = require('./stores/session_store.js');
const ResponseForm = require('./components/responses/response_form.jsx');
const SurveyReport = require('./components/reports/survey_report.jsx');

//For testing, but verify before deleting
// const SessionApiUtil = require('./util/session_api_util.js');
// window.SessionApiUtil = SessionApiUtil;
// window.SessionStore = SessionStore;
// const SurveyApiUtil = require('./util/survey_api_util.js');
// window.SurveyApiUtil = SurveyApiUtil;
// const SurveyActions = require('./actions/survey_actions.js');
// window.SurveyActions = SurveyActions;
// const SurveyStore = require('./stores/survey_store.js');
// window.SurveyStore = SurveyStore;

const _ensureLoggedIn = function(nextState, replace) {
  if (!SessionStore.isUserLoggedIn()) {
    replace("/");
  }
};

const _ensureTrackable = function(nextState, replace) {
  if (!SessionStore.isUserLoggedIn()) {

    if (docCookies.getItem("pollarityAnonymousPolltaker") === null) {
      let anonUsername = Math.random().toString(36).slice(2);

      docCookies.setItem("pollarityAnonymousPolltaker", anonUsername);

      SessionActions.signUpUser({
        username: anonUsername,
        password: "pollarity-anon-user",
        anon: true
      });
    }

    else {
      SessionActions.logInUser({
        username: docCookies.getItem("pollarityAnonymousPolltaker"),
        password: "pollarity-anon-user",
        anon: true
      });
    }
  }
};


// Removed nav bar
const PollarityApp = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

const routes = (
  <Route path="/" component={PollarityApp}>
    <IndexRoute component={Home}/>
    <Route path="login" component={Login}/>
    <Route path="settings" component={UserSettings} onEnter={_ensureLoggedIn}/>
    <Route path="users/new" component={CreateAccount}/>
    <Route path="users/:userId/surveys" component={UserSurveysIndex} onEnter={_ensureLoggedIn}/>
    <Route path="users/:userId/surveys/:surveyId" component={SurveyReport} onEnter={_ensureLoggedIn}/>
    <Route path="surveys/:surveyId" component={ResponseForm} onEnter={_ensureTrackable}/>
  </Route>
);

const retrieveUser = function() {
  if (window.currentUser !== undefined) {
    SessionActions.receiveCurrentUser(window.currentUser["user"]);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  retrieveUser();

  ReactDOM.render((
    <Router history={hashHistory}>
      {routes}
    </Router>
    ), document.getElementById("root")
  );
});
