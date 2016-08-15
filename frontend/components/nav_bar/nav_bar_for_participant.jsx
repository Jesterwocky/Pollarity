const React          = require('react');
const ReactDOM       = require('react-dom');
const hashHistory    = require('react-router').hashHistory;
const SessionStore   = require('../../stores/session_store.js');
const SessionActions = require('../../actions/session_actions.js');
const LogoSmall      = require('./nav_bar_items/logo_small.jsx');
const LoginAndSignupButtons = require('./nav_bar_items/login_and_signup_buttons.jsx');

const NavBarForParticipant = React.createClass({
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

  // loginBasedContent() {
  //   if (this.state.loggedIn && !this.state.anonymous) {
  //     return(
  //       <div className="nav-bar-content-for-participant">
  //         {this.usernameMenu()}
  //       </div>
  //     );
  //   }
  //
  //   else {
  //     return(
  //       <div className="nav-bar-content-for-participant">
  //         <LoginAndSignupButtons/>
  //       </div>
  //     );
  //   }
  // },

  render() {
    return (
      <div className="nav-bar-for-participant">
        <LogoSmall/>
      </div>
    );
  }
});

module.exports = NavBarForParticipant;
