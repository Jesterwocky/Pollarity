const React = require("react");
const ReactDOM = require("react-dom");
const NavBarForHome = require("./nav_bar/nav_bar_for_home.jsx");

const Home = React.createClass({
  render() {
    return(
      <div className={"home-page"}>
        <div className={"home-content"}>
          <NavBarForHome/>
          <h1>Live Audience Participation</h1>
          <h2>Pollarity lets you engage your audience or class in real time</h2>
          <img className="home-computer" src="assets/computer_with_transparent_background_with_graphic.png"/>
        </div>
      </div>
    );
  }
});

module.exports = Home;
