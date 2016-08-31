const React = require('react');
const ReactDOM = require('react-dom');

const UploadButton = React.createClass({
  upload(e) {
    e.preventDefault();
    let that = this;

    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images){
        if (error === null) {
          that.props.updateImage(images);
        }
      }
    );
  },

  render() {
    return (
      <button className="image-upload-icon" onClick={this.upload}>
        <i className="fa fa-camera" aria-hidden="true"></i>
      </button>
    );
  }
});

module.exports = UploadButton;
