const React = require('react');
const ReactDOM = require('react-dom');

const Logout = React.createClass ({

  render() {
    let classnames = "nav-bar-button logout";
    return (

      <div className={classnames}>
        Logout Goes Here
      </div>
    );
  }
});


module.exports = Logout;
