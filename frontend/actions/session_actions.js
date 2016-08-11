const SessionAPIUtil = require('../util/session_api_util.js');
const LoginConstants = require('../constants/login_constants.js');
const Dispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
  logInUser(user) {
    SessionAPIUtil.login(user, this.receiveCurrentUser);
  },

  signUpUser(user) {
    debugger
    SessionAPIUtil.signup(user, this.receiveCurrentUser);
  },

  logOut() {
    SessionAPIUtil.logOut(this.removeCurrentUser);
  },


  receiveCurrentUser(user) {
    Dispatcher.dispatch({
      actionType: LoginConstants.LOGIN,
      user: user
    });
  },

  removeCurrentUser() {
    Dispatcher.dispatch({
      actionType: LoginConstants.LOGOUT
    });
  }

};
