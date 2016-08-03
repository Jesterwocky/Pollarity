module.exports = {
  signup: function(userdata, success, error) {
    $.ajax({
      url: "api/users",
      type: "POST",
      data: userdata,
      dataType: "json",
      success,
      error
    });
  },

  login: function(userdata, success, error) {
    $.ajax({
      url: "api/session",
      type: "POST",
      data: userdata,
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
