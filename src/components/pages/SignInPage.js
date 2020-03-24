import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { logIn, fetchUsers } from "../../actions";

class SignInPage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

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
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Insira email"
        />
        {this.renderError(meta)}
      </div>
    );
  };

  renderPasswordInput = ({ input, meta }) => {
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
        {this.renderError(meta)}
      </div>
    );
  };

  renderNotUser = () => {
    document.querySelector("#notUser").innerHTML =
      "O usuário e/ou senha estão incorretos!";
  };

  onSubmit = async (formProps, dispatch) => {
    await dispatch(logIn(formProps));

    if (this.props.isSignedIn) {
      this.props.history.push("/events/list");
    } else {
      this.renderNotUser();
    }
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-6 text-center">Fazer Login</h1>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field name="loginEmail" component={this.renderEmailInput} />
            <Field name="loginPassword" component={this.renderPasswordInput} />

            <div id="notUser" className="mb-3"></div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const validate = formValues => {
  const { loginEmail, loginPassword } = formValues;
  const errors = {};

  if (loginEmail == null || !loginEmail.trim()) {
    errors.loginEmail = "Você deve inserir uma login";
  }

  if (loginPassword == null || !loginPassword.trim()) {
    errors.loginPassword = "Você deve inserir uma senha";
  }

  return errors;
};

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
});

export default reduxForm({
  form: "signInForm",
  validate
})(connect(mapStateToProps, { logIn, fetchUsers })(SignInPage));
