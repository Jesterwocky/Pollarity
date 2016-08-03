const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');
const LoginConstants = require('../constants/login_constants.js');

const SessionStore = new Store(Dispatcher);

let _currentUser = {};

_login = function(user) {
  _currentUser = user;
};

_logout = function() {
  _currentUser = {};

};

SessionStore.reset = function(user) {
  _currentUser = user;
};

SessionStore.currentUser = function() {
  let userCopy = _currentUser;

  Object.keys(_currentUser).forEach((key) => {
    copy[key] = _currentUser[key];
  });

  return userCopy;
};

SessionStore.isUserLoggedIn = function() {
  if (_currentUser.id !== undefined) {
    return true;
  } else {
    return false;
  }
};

SessionStore.__onDispatch = function() {

};
