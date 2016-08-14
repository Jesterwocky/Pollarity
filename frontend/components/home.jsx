const React = require("react");
const ReactDOM = require("react-dom");
const NavBarForHome = require("./nav_bar/nav_bar_for_home.jsx");

const Home = React.createClass({
  render() {
    return(
      <div className={"home-page group"}>
        <NavBarForHome/>
        <div className="home-content">
          <h1>Live Audience Participation</h1>
          <h2>Pollarity lets you engage your audience or class in real time</h2>
          <section></section>
        </div>
      </div>
    );
  }
});

module.exports = Home;
