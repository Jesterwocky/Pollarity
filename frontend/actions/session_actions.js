const SessionAPIUtil = require('../actions/session_actions.js');
const LoginConstants = require('../constants/login_constants.js');
const Dispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
  logInUser(user) {
    SessionAPIUtil.login(user, receiveCurrentUser);
  },

  signUpUser(user) {
    SessionAPIUtil.signup(user, receiveCurrentUser);
  },

  logOut() {
    SessionAPIUtil.logout(removeCurrenUser);
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
