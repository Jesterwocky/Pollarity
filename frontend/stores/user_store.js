const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');
const LoginConstants = require('../constants/login_constants.js');

const UserStore = new Store(Dispatcher);

let _current_user = {};

reset = function(user) {
  _current_user = user;
};

get = function() {
  let copy = _current_user;

  
};
