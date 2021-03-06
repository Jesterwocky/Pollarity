const React = require('react');
const ReactDOM = require('react-dom');
const UploadButton = require('./upload_button.jsx');

const CreateOption = React.createClass({

  getInitialState() {
    return({
      option: "",
      image_url: undefined,
      thumbnail_url: undefined,
    });
  },

  updateThisOption(e) {
    e.preventDefault();

    this.setState({
      option: e.currentTarget.value
    });

    this.props.updateOption(
      this.props.optionNum,
      {
        option: e.currentTarget.value,
        image_url: this.state.image_url,
        thumbnail_url: this.state.thumbnail_url
      }
    );
  },

  updateImage(images) {
    this.setState({
      image_url: images[0].url,
      thumbnail_url: images[0].thumbnail_url
    });

    this.props.updateOption(
      this.props.optionNum,
      {
        option: this.state.option,
        image_url: images[0].url,
        thumbnail_url: images[0].thumbnail_url
      }
    );
  },

  imagePreview() {
    if (this.state.image_url !== undefined) {
      return(
        <small className="image-option-preview">
          Loaded <img src={this.state.thumbnail_url}/>
        </small>
      );
    }
  },

  deleteThisOption(e) {
    e.preventDefault();
    this.props.deleteOption(this.props.optionNum);
  },

  render() {
    return (
      <div>
        {this.imagePreview()}
        <UploadButton updateImage={this.updateImage}/>
        <input type="text"
          onChange={this.updateThisOption}
          value={this.state.option}
          placeholder="Answer goes here"
        />
      <button onClick={this.deleteThisOption} className="delete-option">&times;</button>
      </div>
    );
  }
});

module.exports = CreateOption;
