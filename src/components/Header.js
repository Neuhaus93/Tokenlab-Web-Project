import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logOut } from "../actions";

class Header extends React.Component {
  logOutButton = () => (
    <Link
      to="/"
      type="button"
      onClick={this.props.onClick}
      className="btn btn-danger my-2 my-sm-0"
      style={{ visibility: `${this.props.isSignedIn ? "" : "hidden"}` }}
    >
      Log out
    </Link>
  );

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark d-flex justify-content-around">
        <Link
          to={`${this.props.isSignedIn ? "/events/list" : "/"}`}
          className="navbar-brand"
        >
          Calendário
        </Link>
        <span className="navbar-brand">{this.props.userName}</span>
        <span>{this.logOutButton()}</span>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn,
  userName: state.auth.userName
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
