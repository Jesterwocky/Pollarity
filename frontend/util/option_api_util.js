module.exports = {
  deleteOption: function(optionId, success, error) {
    $.ajax({
      url: `api/options/${optionId}`,
      type: "DELETE",
      data: optionId,
      dataType: "json",
      success: success,
      error: function(xhr){
        const errors = xhr.responseJSON;
        error("deleteOption", errors);
      }
    });
  }
};
