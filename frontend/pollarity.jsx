const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Pollarity</h1>
      </div>
    );
  }
});

// const routes = (
//   <Route path="/" component={App}>
//   </Route>
// );

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App/>, document.getElementById("root"));
});
