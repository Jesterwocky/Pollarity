module.exports = {
  signup(success, error) {
    $.ajax({
      url: 'api/users',
      type: 'POST',

      success,
      error
    });
  },

  login(success, error) {

  },

  signout(success, error) {
    $.ajax({
      url: 'api/session'
    });
  }
};
