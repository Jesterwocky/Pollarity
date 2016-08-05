module.exports = {
  allSurveys: function(success, error) {
    $.ajax({
      url: "api/surveys",
      type: "GET",
      success,
      error
    });
  },

  userSurveys: function(userId, success, error) {
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
  },

  deleteSurvey: function(surveyId, success, error) {
    $.ajax({
      url: `api/surveys/${surveyId}`,
      type: "DELETE",
      data: surveyId,
      success,
      error
    });
  }
};
