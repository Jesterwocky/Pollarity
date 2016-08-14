const React = require('react');
const ReactDOM = require('react-dom');

const UsernameMenu = React.createClass({
  logOut(e) {
    e.preventDefault();
    $(".user-option").toggle();
    SessionActions.logOut();
    hashHistory.push("");
  },

  goToSettings(e) {
    e.preventDefault();
    $(".user-option").toggle();
    hashHistory.push("settings");
  },

  render() {
    return (
      <ul className="user-options">
        <li>
          <div className="nav-bar-username" onClick={this.openMenu}>
            {this.state.username}
          </div>
        </li>

        <li>
          <div className="user-option" onClick={this.logOut}>
            Log out
          </div>
        </li>
      </ul>
    );
  }
});
