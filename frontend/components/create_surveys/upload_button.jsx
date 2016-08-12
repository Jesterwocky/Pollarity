const React = require('react');
const ReactDOM = require('react-dom');

const UploadButton = React.createClass({
  upload(e) {
    e.preventDefault();

    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images){
        if (error === null) {
          this.props.updateImage(images);
        }
      }
    );
  },

  render() {
    return (
      <img src="camera_icon.jpeg" onClick={this.upload}/>
    );
  }
});

module.exports = UploadButton;
