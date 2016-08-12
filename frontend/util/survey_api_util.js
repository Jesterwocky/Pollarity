module.exports = {
  allSurveys: function(success, error) {
    $.ajax({
      url: "api/surveys",
      type: "GET",
      dataType: "json",
      success: success,
      error: function(xhr){
        const errors = xhr.responseJSON;
        error("seeSurveys", errors);
      }
    });
  },

  userSurveys: function(userId, success, error) {
    $.ajax({
      url: `api/users/${userId}/surveys`,
      type: "GET",
      dataType: "json",
      success: success,
      error: function(xhr){
        const errors = xhr.responseJSON;
        error("seeUserSurveys", errors);
      }
    });
  },

  createSurvey: function(surveyData, success, error) {
    $.ajax({
      url: "api/surveys",
      type: "POST",
      data: surveyData,
      dataType: "json",
      success: success,
      error: function(xhr){
        const errors = xhr.responseJSON;
        error("createSurveyForm", errors);
      }
    });
  },

  getSurvey: function(surveyId, success, error) {
    $.ajax({
      url: `api/surveys/${surveyId}`,
      type: "GET",
      dataType: "json",
      success: success,
      error: function(xhr){
        const errors = xhr.responseJSON;
        error("seeSurvey", errors);
      }
    });
  },

  deleteSurvey: function(surveyId, success, error) {
    $.ajax({
      url: `api/surveys/${surveyId}`,
      type: "DELETE",
      data: surveyId,
      dataType: "json",
      success: success,
      error: function(xhr){
        const errors = xhr.responseJSON;
        error("deleteSurvey", errors);
      }
    });
  }
};
