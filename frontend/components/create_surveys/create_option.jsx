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

    this.props.updateOpt(
      this.props.optionNum,
      {option: this.state.option}
    );
  },

  deleteThisOption(e) {
    e.preventDefault();
    this.props.deleteOption(this.props.optionNum);
  },

  render() {
    return (
      <div>
        <input type="text" onChange={this.updateThisOption} value={this.state.option}/>
        <button onClick={this.deleteThisOption} className="delete-option">X</button>
      </div>
    );
  }
});

module.exports = CreateOption;
