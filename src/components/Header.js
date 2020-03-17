import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const logOutButton = (
    <Link to="/" type="button" className="btn btn-danger my-2 my-sm-0">
      Log out
    </Link>
  );

  return (
    <nav className="navbar navbar-dark bg-dark d-flex justify-content-around">
      <button
        className="navbar-brand link-button"
        style={{
          backgroundColor: "transparent",
          border: "none"
        }}
      >
        Calendário
      </button>
      <span className="navbar-brand">Lucas</span>
      <span>{logOutButton}</span>
    </nav>
  );
};

export default Header;
