import React from "react";
import { reset, Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { createUser } from "../../actions";

class SignUpPage extends React.Component {
  renderEmailInput = ({ input }) => {
    return (
      <div className="form-group">
        <label>Email</label>
        <input
          {...input}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Insira email"
        />
      </div>
    );
  };

  renderUsernameInput = ({ input }) => {
    return (
      <div className="form-group">
        <label>Usuario</label>
        <input
          {...input}
          className="form-control"
          placeholder="Insira nome do usuário"
        />
      </div>
    );
  };

  renderPasswordInput = ({ input }) => {
    return (
      <div className="form-group mb-3">
        <label>Senha</label>
        <input
          {...input}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Senha"
        />
      </div>
    );
  };

  isValid(formProps) {
    const isNotValid =
      formProps.email == null ||
      !formProps.email.trim() ||
      formProps.userName == null ||
      !formProps.userName.trim() ||
      formProps.password == null ||
      !formProps.password.trim();

    return !isNotValid;
  }

  onSubmit = async (formProps, dispatch) => {
    if (!this.isValid) return;
    console.log(formProps);

    await dispatch(createUser(formProps));
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
            <button type="submit" className="btn btn-primary">
              Cadastre
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "signUpForm"
})(connect(null, { createUser })(SignUpPage));
