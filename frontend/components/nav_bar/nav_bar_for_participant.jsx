const React          = require('react');
const ReactDOM       = require('react-dom');
const hashHistory    = require('react-router').hashHistory;
const SessionStore   = require('../stores/session_store.js');
const SessionActions = require('../actions/session_actions.js');
const LogoSmall      = require('./logo_small.jsx');
const UsernameMenu   = require('./username_menu.jsx');
const LoginAndSignupButtons = require('./login_and_signup_buttons.jsx');

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

  loginBasedContent() {
    if (this.state.loggedIn && !this.state.anonymous) {
      return(
        <div className="nav-bar-content-for-participant">
          <UsernameMenu/>
        </div>
      );
    }

    else {
      return(
        <div className="nav-bar-content-for-participant">
          <LoginAndSignupButtons/>
        </div>
      );
    }
  },

  render() {
    return (
      <div className="nav-bar-for-participant">
        <LogoSmall/>
        {this.loginBasedContent()}
      </div>
    );
  }
});
