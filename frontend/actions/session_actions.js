const SessionAPIUtil = require('../util/session_api_util.js');
const LoginConstants = require('../constants/login_constants.js');
const Dispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
  logInUser(user) {
    SessionAPIUtil.login(user, this.receiveCurrentUser);
  },

  signUpUser(user) {
    SessionAPIUtil.signup(user, this.receiveCurrentUser);
  },

  logOut() {
    SessionAPIUtil.logout(this.removeCurrenUser);
  },


  receiveCurrentUser(user) {
    Dispatcher.dispatch({
      actionType: LoginConstants.LOGIN,
      user: user
    });
  },

  removeCurrenUser() {
    Dispatcher.dispatch({
      actionType: LoginConstants.LOGOUT
    });
  }

};
