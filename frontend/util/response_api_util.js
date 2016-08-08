module.exports = {
  createResponse: function(responseData, success, error) {
    $.ajax({
      url: "api/responses",
      type: "POST",
      data: responseData,
      dataType: "json",
      success,
      error
    });
  },

  fetchResponsesToQuestion: function(questionId, success, error) {
    $.ajax({
      
    });
  },

  changeResponse: function(responseData, success, error) {
    $.ajax({
      url: `api/responses/${responseData.id}`,
      type: "PATCH",
      data: responseData,
      dataType: "json",
      success,
      error
    });
  },

  removeResponse: function(responseId, success, error) {
    $.ajax({
      url: `api/responses/${responseid}`,
      type: "DELETE",
      dataType: "json",
      success,
      error
    });
  }
};
