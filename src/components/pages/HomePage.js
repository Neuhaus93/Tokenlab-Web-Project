import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-5 text-center">Calendário</h1>
          <p className="lead text-center">
            Seja bem vindo ao calendário de eventos
          </p>

          <Link
            type="button"
            to="/auth/signin"
            className="btn btn-primary btn-lg btn-block"
          >
            Fazer Login
          </Link>
          <Link
            type="button"
            to="/auth/signup"
            className="btn btn-danger btn-lg btn-block"
          >
            Fazer Cadastro
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
