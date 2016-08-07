module.exports = {
  allSurveys: function(success, error) {
    $.ajax({
      url: "api/surveys",
      type: "GET",
      dataType: "json",
      success,
      error
    });
  },

  userSurveys: function(userId, success, error) {
    debugger
    $.ajax({
      url: `api/users/${userId}/surveys`,
      type: "GET",
      dataType: "json",
      success,
      error
    });
  },

  createSurvey: function(surveyData, success, error) {
    $.ajax({
      url: "api/surveys",
      type: "POST",
      data: surveyData,
      dataType: "json",
      success,
      error
    });
  },

  deleteSurvey: function(surveyId, success, error) {
    $.ajax({
      url: `api/surveys/${surveyId}`,
      type: "DELETE",
      data: surveyId,
      dataType: "json",
      success,
      error
    });
  }
};
