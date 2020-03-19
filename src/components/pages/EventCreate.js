import React from "react";
import { reset, Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { createEvent } from "../../actions";

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
        <option defaultValue="Nada">----</option>
        <option>Trabalho</option>
        <option>Lazer</option>
        <option>Educação</option>
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

  isValid(formProps) {
    if (formProps.inputDescription == null || !formProps.email.trim())
      return false;

    return true;
  }

  onSubmit = (formProps, dispatch) => {
    if (this.isValid) return;

    dispatch(createEvent(formProps));
    this.props.history.push("/events/list");
    dispatch(reset("signUpForm"));
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-6 text-center">Criar Evento</h1>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <div className="form-row mt-4 mb-3">
              <Field
                name="inputDescription"
                component={this.eventDescription}
              />
              <Field name="inputCategory" component={this.eventCategory} />
            </div>

            <div className="form-row mb-3">
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
})(connect(null, { createEvent })(EventCreate));
