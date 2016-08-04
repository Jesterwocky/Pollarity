const SessionAPIUtil = require('../util/session_api_util.js');
const LoginConstants = require('../constants/login_constants.js');
const Dispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
  logInUser(userData) {
    SessionAPIUtil.login(userData, this.receiveCurrentUser);
  },

  signUpUser(userData) {
    SessionAPIUtil.signup(userData, this.receiveCurrentUser);
  },

  logOut() {
    SessionAPIUtil.logOut(this.removeCurrentUser);
  },


  receiveCurrentUser(userData) {
    Dispatcher.dispatch({
      actionType: LoginConstants.LOGIN,
      userData: userData
    });
  },

  removeCurrentUser() {
    Dispatcher.dispatch({
      actionType: LoginConstants.LOGOUT
    });
  }

};
