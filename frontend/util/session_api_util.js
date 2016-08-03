module.exports = {
  signup: function(userdata, success, error) {
    $.ajax({
      url: "api/users",
      type: "POST",
      data: userdata,
      success,
      error
    });
  },

  login: function(userdata, success, error) {
    $.ajax({
      url: "api/session",
      type: "POST",
      data: userdata,
      success: function(response) {
        console.log(response);
      },
    });
  },

  logout: function(success, error) {
    $.ajax({
      url: "api/session",
      type: "DELETE",
      success,
      error
    });
  }
};
