module.exports = {
  createResponse: function(responseData, success, error) {

    $.ajax({
      url: "api/responses",
      type: "POST",
      data: responseData,
      dataType: "json",
      success: success,
      error: function(xhr){
        const errors =xhr.responseJSON;
        error("responseForm", errors);
      }
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

  responsesByUser: function(userId, success, error) {
    $.ajax({
      url: `api/users/${userId}/responses`,
      type: "GET",
      dataType: "json",
      success,
      error
    });
  },

  changeResponse: function(responseId, newOptionId, success, error) {
    $.ajax({
      url: `api/responses/${responseId}`,
      type: "PATCH",
      data: {selected_option_id: newOptionId},
      dataType: "json",
      success,
      error
    });
  },

  deleteResponse: function(responseId, success, error) {
    $.ajax({
      url: `api/responses/${responseId}`,
      type: "DELETE",
      dataType: "json",
      success,
      error
    });
  },
};
