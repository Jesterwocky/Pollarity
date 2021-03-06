const React          = require('react');
const ReactDOM       = require('react-dom');
const hashHistory    = require('react-router').hashHistory;
const SessionStore   = require('../../stores/session_store.js');
const SessionActions = require('../../actions/session_actions.js');
const LogoLarge      = require('./nav_bar_items/logo_large.jsx');
const ClonedSiteLink = require('./nav_bar_items/cloned_site_link.jsx');
const LoginAndSignupButtons = require('./nav_bar_items/login_and_signup_buttons.jsx');

const NavBarForHome = React.createClass({
  getInitialState() {
    return({
      loggedIn: SessionStore.isUserLoggedIn(),
      currentUsername: SessionStore.currentUser(),
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
      currentUsername: SessionStore.currentUser().username,
      anonymous: SessionStore.currentUser().anon
    });
  },

  logOut(e) {
    e.preventDefault();
    SessionActions.logOut();
    hashHistory.push("");
  },

  goToUserPolls(e) {
    e.preventDefault();
    hashHistory.push(`users/${SessionStore.currentUser().id}/surveys`);
  },

  loggedInUserOptions() {
    return (
      <ul className="home-user-options">
        <li><a href="" onClick={this.goToUserPolls}>
          My Polls
        </a></li>

        <li><a href="" onClick={this.logOut}>
          Log out
        </a></li>
      </ul>
    );
  },

  loginBasedContent() {
    if (this.state.loggedIn) {
      return (
        <div className={"nav-bar-for-home-content group"}>
          <LogoLarge/>
          {this.loggedInUserOptions()}
          <ClonedSiteLink/>
        </div>
      );
    }

    else {
      return (
        <div className={"nav-bar-for-home-content group"}>
          <LogoLarge/>
          <LoginAndSignupButtons/>
          <ClonedSiteLink/>
        </div>
      );
    }
  },

  render() {
    return (
      <div className={"nav-bar-for-home group"}>
        {this.loginBasedContent()}
      </div>
    );
  }
});

module.exports = NavBarForHome;
