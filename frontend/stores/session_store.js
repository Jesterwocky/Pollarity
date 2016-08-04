const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');
const LoginConstants = require('../constants/login_constants.js');


const SessionStore = new Store(Dispatcher);

let _currentUser = {};

const _login = function(userData) {
  _currentUser = {};

  debugger
  Object.keys(userData.user).forEach((key) => {
    _currentUser[key] = userData.user[key];
    console.log(`User is being logged in with this property: ${key}`);

  });

};

const _logout = function() {
  _currentUser = {};
};

SessionStore.reset = function(user) {
  _currentUser = user;
};

SessionStore.currentUser = function() {
  if (_currentUser === undefined) return {};

  let userCopy = _currentUser;

  Object.keys(_currentUser).forEach((key) => {
    userCopy[key] = _currentUser[key];
  });

  return userCopy;
};

SessionStore.isUserLoggedIn = function() {
  if (_currentUser !== undefined && _currentUser.id !== undefined) {
    return true;
  } else {
    return false;
  }
};

SessionStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case LoginConstants.LOGIN:
      _login(payload.userData);
      this.__emitChange();
      break;
    case LoginConstants.LOGOUT:
      _logout();
      this.__emitChange();
      break;
  }
};

module.exports = SessionStore;
