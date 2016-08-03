module.exports = {
  signup(success, error) {
    $.ajax({
      url: 'api/users',
      type: 'POST',
      success,
      error
    });

  }
};
