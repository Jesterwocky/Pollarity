const React        = require('react');
const ReactDOM     = require('react-dom');

const LogoLarge = React.createClass({
  goToRoot(e) {
    e.preventDefault();
    hashHistory.push("");
  },

  render() {
    return (
      <a onClick={this.goToRoot} className="nav-bar-logo-not-logged-in">
        Pollarity
      </a>
    );
  }
});

module.exports = LogoLarge;
