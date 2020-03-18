import React from "react";
import { reset, Field, reduxForm } from "redux-form";

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
      <div className="form-group">
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

  onSubmit = (formProps, dispatch) => {
    console.log(formProps);

    // dispatch(createUser(formProps));
    // this.props.history.push("/auth/signin");
    // dispatch(reset("signUpForm"));
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
})(SignUpPage);
