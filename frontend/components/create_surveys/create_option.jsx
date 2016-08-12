const React = require('react');
const ReactDOM = require('react-dom');

const CreateOption = React.createClass({

  getInitialState() {

    return({
      option: ""
    });
  },

  updateThisOption(e) {

    e.preventDefault();

    this.setState({
      option: e.currentTarget.value
    });

    this.props.updateOption(
      this.props.optionNum,
      {option: e.currentTarget.value}
    );
  },

  updateImage(images) {
    this.setState({
      imageUrl: image.url,
      thumbnailUrl: image.thumbnail_url
    });
  },

  deleteThisOption(e) {
    e.preventDefault();
    this.props.deleteOption(this.props.optionNum);
  },

  render() {
    return (
      <div>
        <UploadButton updateImage={this.updateImage}/>
        <input type="text"
          onChange={this.updateThisOption}
          value={this.state.option}
          placeholder="Answer goes here"
        />
        <button onClick={this.deleteThisOption} className="delete-option">X</button>
      </div>
    );
  }
});

module.exports = CreateOption;
