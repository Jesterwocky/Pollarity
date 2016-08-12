module.exports = {
  signup: function(user, success, error) {
    $.ajax({
      url: "api/users",
      type: "POST",
      data: user,
      dataType: "json",
      success: success,
      error: function(xhr){
        const errors = xhr.responseJSON;
        error("signup", errors);
      }
    });
  },

  login: function(user, success, error) {
    $.ajax({
      url: "api/session",
      type: "POST",
      data: user,
      dataType: "json",
      success: success,
      error: function(xhr){
        const errors = xhr.responseJSON;
        error("login", errors);
      }
    });
  },

  logOut: function(success, error) {
    $.ajax({
      url: "api/session",
      type: "DELETE",
      dataType: "json",
      success,
      error
    });
  }
};
