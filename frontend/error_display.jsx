const React = require('react');
const ReactDOM = require('react-dom');

const ErrorDisplay = React.createClass({
  errors() {
    let errorList = [];

    if (this.props.errors !== undefined && this.props.errors.length > 0) {
      this.props.errors.forEach((error, i) => {
        errorList.push(
          <li key={i} className="error-item">
            {error}
          </li>
        );
      });
    }

    return (
      <ul className="error-text">
        {errorList}
      </ul>
    );
  },

  render() {
    return(
      <div className="error-text">{this.errors()}</div>
    );
  }
});

module.exports = ErrorDisplay;
