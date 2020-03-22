import React from "react";
import { Field, reduxForm } from "redux-form";

class EventForm extends React.Component {
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
        <option>----</option>
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

  isValid = formProps => {
    const isNotValid =
      formProps.description == null ||
      !formProps.description.trim() ||
      formProps.date == null ||
      !formProps.date.trim() ||
      formProps.startTime == null ||
      !formProps.startTime.trim() ||
      formProps.endTime == null ||
      !formProps.endTime.trim();
    return !isNotValid;
  };

  onSubmit = formProps => {
    if (!this.isValid(formProps)) return;
    // console.log("Is Valid");
    this.props.onSubmit(formProps);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div className="form-row mt-4 mb-3">
          <Field name="description" component={this.eventDescription} />
          <Field name="category" component={this.eventCategory} />
        </div>

        <div className="form-row mb-3">
          <Field name="date" component={this.eventDate} />
          <Field name="startTime" component={this.eventTimeStart} />
          <Field name="endTime" component={this.eventTimeEnd} />
        </div>

        <button type="submit" className="btn btn-primary">
          {this.props.buttonText}
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "eventForm"
})(EventForm);
