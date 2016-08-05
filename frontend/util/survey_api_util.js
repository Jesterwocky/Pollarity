module.exports = {
  fetchAllSurveys: function(success, error) {
    $.ajax({
      url: "api/surveys",
      type: "GET",
      success,
      error
    });
  },

  fetchUserSurveys: function(userId, success, error) {
    $.ajax({
      url: `api/users/${userId}/surveys`,
      type: "GET",
      success,
      error
    });
  },

  createSurvey: function(surveyData, success, error) {
    $.ajax({
      url: "api/surveys",
      type: "POST",
      data: surveyData,
      success,
      error
    });
  }
};
