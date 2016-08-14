const React                = require('react');
const ReactDOM             = require('react-dom');
const hashHistory          = require('react-router').hashHistory;
const SessionStore         = require('../stores/session_store.js');
const SessionActions       = require('../actions/session_actions.js');
const SurveyCreatorOptions = require('./survey_creator_options.jsx');
const LogoSmall            = require('./logo_small.jsx');

const NavBarForHome = React.createClass({
  getInitialState() {
    return({
      loggedIn: SessionStore.isUserLoggedIn(),
      currentUsername: SessionStore.currentUser()
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
      currentUsername: SessionStore.currentUser().username
    });
  },

  loginBasedContent() {
    if (this.state.loggedIn) {
      return(
        <div className="nav-bar-content-for-poll-creator">
          <SurveyCreatorOptions/>
          <UsernameOptions/>
        </div>
      );
    }

    else {
      return(
        <div className="nav-bar-content-for-poll-creator">

        </div>
      );
    }
  },

  render() {
    return (
      <div className="nav-bar-for-poll-creator">
        <LogoSmall/>
        {this.loginBasedContent()}
      </div>
    );
  }

});
