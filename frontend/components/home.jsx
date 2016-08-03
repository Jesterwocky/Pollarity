const React = require("react");
const ReactDOM = require("react-dom");

const Home = React.createClass({


  render() {
    return(
      <div>
        <div className="dots-overlay"></div>
        <div className="home-content">
          <h1>Live Audience Participation</h1>
        </div>
      </div>
    );
  }
});

module.exports = Home;
