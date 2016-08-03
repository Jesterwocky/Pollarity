const React = require("react");
const ReactDOM = require("react-dom");

const Home = React.createClass({


  render() {
    return(
      <div className="home-page">
        <div className="dots-overlay"></div>
        <div className="home-content">
          <h1>Live Audience Participation</h1>
          <h2>Pollarity lets you engage your audience or class in real time</h2>
        </div>
      </div>
    );
  }
});

module.exports = Home;
