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

  removeOption() {
    console.log("Option will be removed!");
  },

  render() {
    return (
      <div>
        <input type="text" onChange={this.updateOption} value={this.state.option}/>
        <button onClick={this.RemoveOption} className="delete-option">X</button>
      </div>
    );
  }
});

module.exports = CreateOption;
