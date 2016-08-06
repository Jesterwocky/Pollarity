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
        This will be an option box
        <input type="text" onClick={this.updateOption} value={this.state.option}/>
        <button onClick={this.RemoveOption}>X</button>
      </div>
    );
  }
});

module.exports = CreateOption;
