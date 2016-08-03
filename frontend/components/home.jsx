const React = require("react");
const ReactDOM = require("react-dom");

const Home = React.createClass({


  render() {
    return(
      <div>
        <div className="home"></div>
        <div className="dots-overlay"></div>
        <div className="home-content"></div>
        <h5>Home Test</h5>
      </div>
    );
  }
});

module.exports = Home;
