import React from "react";
import { reset, Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { createUser } from "../../actions";

class SignUpPage extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div>
          <em style={{ color: "red", marginLeft: "5px", fontSize: "0.9rem" }}>
            {error}
          </em>
        </div>
      );
    }
  };

  renderEmailInput = ({ input, meta }) => {
    return (
      <div className="form-group">
        <label>Email</label>
        <input
          {...input}
          type="email"
          className="form-control"
          autoComplete="off"
          aria-describedby="emailHelp"
          placeholder="Insira um e-mail"
        />
        {this.renderError(meta)}
      </div>
    );
  };

  renderUsernameInput = ({ input, meta }) => {
    return (
      <div className="form-group">
        <label>Usuario</label>
        <input
          {...input}
          className="form-control"
          autoComplete="off"
          placeholder="Insira um nome do usuário"
        />
        {this.renderError(meta)}
      </div>
    );
  };

  renderPasswordInput = ({ input, meta }) => {
    return (
      <div className="form-group mb-3">
        <label>Senha</label>
        <input
          {...input}
          type="password"
          className="form-control"
          placeholder="Senha"
        />
        {this.renderError(meta)}
      </div>
    );
  };

  renderNotUser = () => {
    document.querySelector("#userExists").innerHTML =
      "Este e-mail já está cadastrado!";
  };

  onSubmit = async (formProps, dispatch) => {
    const response = await dispatch(createUser(formProps));
    if (!response) {
      this.renderNotUser();
      return;
    }
    this.props.history.push("/auth/signin");
    dispatch(reset("signUpForm"));
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-6 text-center">Fazer Cadastro</h1>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field name="email" component={this.renderEmailInput} />
            <Field name="userName" component={this.renderUsernameInput} />
            <Field name="password" component={this.renderPasswordInput} />

            <div id="userExists" className="mb-3"></div>

            <button type="submit" className="btn btn-primary">
              Cadastre
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const validate = formValues => {
  const { email, userName, password } = formValues;
  const errors = {};

  if (email == null || !email.trim()) {
    errors.email = "Você deve inserir um e-mail";
  }

  if (userName == null || !userName.trim()) {
    errors.userName = "Você deve inserir um nome de usuário";
  }

  if (password == null || !password.trim()) {
    errors.password = "Você deve inserir um password";
  }

  return errors;
};

export default reduxForm({
  form: "signUpForm",
  validate
})(connect(null, { createUser })(SignUpPage));
