const React    = require('react');
const ReactDOM = require('react-dom');

const ClonedSiteLink = React.createClass({
  render(){
    return (
      <div className="inspiration">
        <a href="https://www.polleverywhere.com/">Inspired by Poll Everywhere</a>
      </div>
    );
  }
});

module.exports = ClonedSiteLink;
