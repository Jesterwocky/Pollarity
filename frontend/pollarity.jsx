const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const Home = require('./components/home.jsx');
const NavBar = require('./components/nav_bar.jsx');
const Signup = require('./components/user_auth/signup/signup.jsx');
const Login = require('./components/user_auth/login/login.jsx');
const UserSettings = require('./components/user_auth/logged_in_options/user_settings.jsx');
const SessionActions = require('./actions/session_actions.js');
const CreateAccount = require('./components/user_auth/signup/create_account.jsx');
const UserSurveysIndex = require('./components/user_surveys/user_surveys_index.jsx');
const SessionStore = require('./stores/session_store.js');
const ResponseForm = require('./components/responses/response_form.jsx');
const SurveyReport = require('./components/reports/survey_report.jsx');

//For testing, but verify before deleting
const SessionApiUtil = require('./util/session_api_util.js');
window.SessionApiUtil = SessionApiUtil;
window.SessionStore = SessionStore;
const SurveyApiUtil = require('./util/survey_api_util.js');
window.SurveyApiUtil = SurveyApiUtil;
const SurveyActions = require('./actions/survey_actions.js');
window.SurveyActions = SurveyActions;
const SurveyStore = require('./stores/survey_store.js');
window.SurveyStore = SurveyStore;

const _ensureLoggedIn = function(nextState, replace) {
  if (!SessionStore.isUserLoggedIn()) {
    replace("/");
  }
};

const _ensureTrackable = function(nextState, replace) {
  console.log("Ensuring trackability");
  if (!SessionStore.isUserLoggedIn()) {
    if (docCookies.getItem("pollarityAnonymousPolltaker") === null) {
      let anonUsername = Math.random().toString(36).slice(2);
      console.log(`New anon username: ${anonUsername}`);

      docCookies.setItem("pollarityAnonymousPolltaker", anonUsername);

      SessionActions.signUpUser({
        username: anonUsername,
        password: "pollarity-anon-user",
        anon: true
      });

      console.log(`Did it! Signed up anon user ${anonUsername}`);
    }

    else {
      SessionActions.logInUser({
        username: docCookies.getItem("pollarityAnonymousPolltaker"),
        password: "pollarity-anon-user",
        anon: true
      });
    }
  }
  console.log("Hello anon!");
};

const App = React.createClass({
  render() {
    return (
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
});

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="login" component={Login}/>
    <Route path="settings" component={UserSettings} onEnter={_ensureLoggedIn}/>
    <Route path="users/new" component={Signup}/>
    <Route path="users/new/create-account" component={CreateAccount}/>
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
