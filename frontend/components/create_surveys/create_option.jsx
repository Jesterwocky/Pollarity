const React = require('react');
const ReactDOM = require('react-dom');

const CreateOption = React.createClass({

  getInitialState() {
    return({
      option: ""
    });
  },

  updateOption(e) {
    e.preventDefault();

    this.setState({
      option: e.currentTarget.value
    });
  },

  deleteThisOption(e) {
    e.preventDefault();
    this.props.deleteOption(this.props.optionNum);
  },

  render() {
    return (
      <div>
        <input type="text" onChange={this.updateOption} value={this.state.option}/>
        <button onClick={this.deleteThisOption} className="delete-option">X</button>
      </div>
    );
  }
});

module.exports = CreateOption;
