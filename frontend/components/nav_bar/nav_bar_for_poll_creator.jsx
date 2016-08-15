const React          = require('react');
const ReactDOM       = require('react-dom');
const hashHistory    = require('react-router').hashHistory;
const SessionStore   = require('../../stores/session_store.js');
const SessionActions = require('../../actions/session_actions.js');
const LogoSmall      = require('./nav_bar_items/logo_small.jsx');
const SurveyCreatorOptions = require('./nav_bar_items/survey_creator_options.jsx');

const NavBarForPollCreator = React.createClass({
  getInitialState() {
    return({
      loggedIn: SessionStore.isUserLoggedIn(),
      username: SessionStore.currentUser().username,
      anonymous: SessionStore.currentUser().anon
    });
  },

  componentDidMount() {
    this.loginListener = SessionStore.addListener(this._handleSessionChange);
  },

  componentWillUnmount() {
    this.loginListener.remove();
  },

  _handleSessionChange() {
    this.setState({
      loggedIn: SessionStore.isUserLoggedIn(),
      username: SessionStore.currentUser().username,
      anonymous: SessionStore.currentUser().anon
    });
  },

  openMenu(e) {
    e.preventDefault();
    $(".user-option").toggle();
  },

  logOut(e) {
    e.preventDefault();
    $(".user-option").toggle();
    SessionActions.logOut();
    hashHistory.push("");
  },

  goToSettings(e) {
    e.preventDefault();
    $(".user-option").toggle();
    hashHistory.push("settings");
  },

  usernameMenu() {
    return (
      <ul className="user-options">
        <li>
          <div className="nav-bar-username" onClick={this.openMenu}>
            {this.state.username}
          </div>
        </li>

        <li>
          <div className="user-option" onClick={this.logOut}>
            Log out
          </div>
        </li>
      </ul>
    );
  },

  loginBasedContent() {
    if (this.state.loggedIn) {
      return(
        <div className="nav-bar-content-for-poll-creator">
          <SurveyCreatorOptions/>
          {this.usernameMenu()}
          <LogoSmall/>
        </div>
      );
    }
  },

  render() {
    return (
      <div className="nav-bar-for-poll-creator">
        {this.loginBasedContent()}
      </div>
    );
  }
});

module.exports = NavBarForPollCreator;
