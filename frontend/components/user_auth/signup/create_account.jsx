const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;
const SessionActions = require('../../../actions/session_actions.js');
const SessionStore = require('../../../stores/session_store.js');
const ErrorStore = require('../../../stores/error_store.js');
const ErrorDisplay = require('../../../error_display.jsx');

const CreateAccount = React.createClass({
  getInitialState() {
    return({
      username: "",
      password: "",
    });
  },

  componentDidMount() {
    this.listener = SessionStore.addListener(this._onSessionChange);
    this.errorListener = ErrorStore.addListener(this._onErrorChange);
  },

  componentWillUnmount() {
    this.listener.remove();
    this.errorListener.remove();
  },

  _onErrorChange() {
    this.setState({
      errors: ErrorStore.errors(this.formType())
    });
  },

  formType() {
    return "signup";
  },

  _onSessionChange() {
    if (SessionStore.isUserLoggedIn) {
      hashHistory.push(`users/${SessionStore.currentUser().id}/surveys`);
    }
  },

  grabUsername(e) {
    this.setState({
      username: e.currentTarget.value
    });
  },

  grabPassword(e) {
    this.setState({
      password: e.currentTarget.value
    });
  },

  createAccount(e) {
    e.preventDefault();
    SessionActions.signUpUser({
      username: this.state.username,
      password: this.state.password
    });
  },

  render() {
    let classnames = "create-account-page group";

    return(
      <div className={classnames}>
        <div className="create-account-box">
          <h1>Signup</h1>

          <ErrorDisplay errors={this.state.errors}/>

          <form onSubmit={this.createAccount}>

            <label>Username</label>
            <input onChange={this.grabUsername} type="text" className="user-auth-field" id="username-field"/>

            <label>Password</label>
            <input onChange={this.grabPassword} type="password" className="user-auth-field" id="password-field"/>

            <input type="submit" className="login-form-button" value="Create my Pollarity account"/>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = CreateAccount;
