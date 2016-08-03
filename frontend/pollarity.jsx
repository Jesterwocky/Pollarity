const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const Home = require('./components/home.jsx');

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Pollarity</h1>
      </div>
    );
  }
});

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
  </Route>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render((
    <Router history={hashHistory}>
      {routes}
    </Router>
    ), document.getElementById("root")
  );
});
