const AUTH_TOKEN = $('meta[name=csrf-token]').attr('content');

module.exports = {
  deleteQuestion: function(questionId, success, error) {
    $.ajax({
      url: `api/questions/${questionId}`,
      type: "DELETE",
      data: { authenticity_token: AUTH_TOKEN },
      success: success,
      error: function(xhr){
        const errors = xhr.responseJSON;
        error("deleteQuestion", errors);
      }
    });
  }
};
