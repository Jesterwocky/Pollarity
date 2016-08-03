module.exports = {
  signup: function(user, success, error) {
    $.ajax({
      url: "api/users",
      type: "POST",
      data: user,
      dataType: "json",
      success,
      error
    });
  },

  login: function(user, success, error) {
    $.ajax({
      url: "api/session",
      type: "POST",
      data: user,
      dataType: "json",
      success,
      error
    });
  },

  logout: function(success, error) {
    $.ajax({
      url: "api/session",
      type: "DELETE",
      dataType: "json",
      success,
      error
    });
  }
};
