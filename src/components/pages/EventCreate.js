import React from "react";
import { reset, Field, reduxForm } from "redux-form";

class EventCreate extends React.Component {
  eventDescription = ({ input }) => (
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">Descrição</label>
      <input
        {...input}
        type="text"
        className="form-control"
        placeholder="Descrição do evento"
      />
    </div>
  );

  eventCategory = ({ input }) => (
    <div className="form-group col-md-3">
      <label htmlFor="inputState">Categoria</label>
      <select {...input} id="inputState" className="form-control">
        <option defaultValue="Nada">Nada</option>
        <option>Trabalho</option>
        <option>Lazer</option>
      </select>
    </div>
  );

  eventDate = ({ input }) => (
    <div className="form-group col-md-3">
      <label htmlFor="inputEventDate">Data do evento</label>
      <input
        {...input}
        type="date"
        className="form-control"
        id="inputEventDate"
      />
    </div>
  );

  eventTimeStart = ({ input }) => (
    <div className="form-group col-md-2">
      <label htmlFor="inputStartTime">Hora de Início</label>
      <input
        {...input}
        type="time"
        className="form-control"
        id="inputStartTime"
      />
    </div>
  );

  eventTimeEnd = ({ input }) => (
    <div className="form-group col-md-2">
      <label htmlFor="inputEndTime">Hora de Término</label>
      <input
        {...input}
        type="time"
        className="form-control"
        id="inputEndTime"
      />
    </div>
  );

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
          <h1 className="display-6 text-center">Criar Evento</h1>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <div className="form-row mb-3">
              <Field
                name="inputDescription"
                component={this.eventDescription}
              />
              <Field name="inputCategory" component={this.eventCategory} />
            </div>

            <div className="form-row">
              <Field name="inputDate" component={this.eventDate} />
              <Field name="inputStartTime" component={this.eventTimeStart} />
              <Field name="inputEndTime" component={this.eventTimeEnd} />
            </div>

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
  form: "createEventForm"
})(EventCreate);
