
module.exports = {
  deleteOption: function(optionId, success, error) {
    const AUTH_TOKEN = $('meta[name=csrf-token]').attr('content');
    let dataToSend = Object.assign({}, { id: optionId }, { authenticity_token: AUTH_TOKEN });
    $.ajax({
      url: `api/options/${optionId}`,
      type: "DELETE",
      data: dataToSend,
      dataType: "json",
      success: success,
      error: function(xhr){
        const errors = xhr.responseJSON;
        error("deleteOption", errors);
      }
    });
  }
};
