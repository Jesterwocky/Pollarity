module.exports = {
  createSurveyResponse: function(responseData, success, error) {
    $.ajax({
      url: "api/responses",
      type: "POST",
      data: responseData,
      dataType: "json",
      success,
      error
    });
  },

  surveyResponses: function(surveyId, success, error) {
    $.ajax({
      url: `api/surveys/${surveyId}/responses`,
      type: "GET",
      dataType: "json",
      success,
      error
    });
  },

  reponsesByUser: function(userId, success, error) {
    $.ajax({
      url: `api/users/${userId}/responses`,
      type: "GET",
      dataType: "json",
      success,
      error
    });
  },

  changeSurveyResponse: function(responseData, success, error) {
    $.ajax({
      url: `api/responses/${responseData.id}`,
      type: "PATCH",
      data: responseData,
      dataType: "json",
      success,
      error
    });
  },

  deleteSurveyResponse: function(responseId, success, error) {
    $.ajax({
      url: `api/responses/${responseid}`,
      type: "DELETE",
      dataType: "json",
      success,
      error
    });
  }
};
