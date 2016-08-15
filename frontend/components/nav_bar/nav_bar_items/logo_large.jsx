const React       = require('react');
const ReactDOM    = require('react-dom');
const hashHistory = require('react-router').hashHistory;

const LogoLarge = React.createClass({
  goToRoot(e) {
    e.preventDefault();
    hashHistory.push("");
  },

  render() {
    return (
      <a onClick={this.goToRoot} className="nav-bar-logo-large">
        Pollarity
      </a>
    );
  }
});

module.exports = LogoLarge;
