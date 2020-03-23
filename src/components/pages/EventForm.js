import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class EventForm extends React.Component {
  isAvailable = formProps => {
    const { date, startTime, endTime } = formProps;

    const toNumber = time => {
      const temp = time.split(":");
      return parseFloat(parseInt(temp[0]) + parseInt(temp[1]) / 60);
    };

    if (toNumber(startTime) >= toNumber(endTime)) {
      return false;
    }

    let available = true;

    for (let i = 0; i < this.props.events.length; i++) {
      const e = this.props.events[i];
      if (date === e.date) {
        if (
          toNumber(startTime) < toNumber(e.startTime) &&
          toNumber(endTime) > toNumber(e.startTime)
        ) {
          available = false;
          break;
        }

        if (
          toNumber(endTime) > toNumber(e.endTime) &&
          toNumber(startTime) < toNumber(e.endTime)
        ) {
          available = false;
          break;
        }

        if (
          toNumber(startTime) > toNumber(e.startTime) &&
          toNumber(endTime) < toNumber(e.endTime)
        ) {
          available = false;
          break;
        }
      }
    }

    return available;
  };

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

  eventDescription = ({ input, meta }) => (
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">Descrição</label>
      <input
        {...input}
        type="text"
        autoComplete="off"
        className="form-control"
        placeholder="Descrição do evento"
      />
      {this.renderError(meta)}
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

  eventDate = ({ input, meta }) => (
    <div className="form-group col-md-3">
      <label htmlFor="inputEventDate">Data do evento</label>
      <input
        {...input}
        type="date"
        className="form-control"
        id="inputEventDate"
      />
      {this.renderError(meta)}
    </div>
  );

  eventTimeStart = ({ input, meta }) => (
    <div className="form-group col-md-2">
      <label htmlFor="inputStartTime">Hora de Início</label>
      <input
        {...input}
        type="time"
        className="form-control"
        id="inputStartTime"
      />
      {this.renderError(meta)}
    </div>
  );

  eventTimeEnd = ({ input, meta }) => (
    <div className="form-group col-md-2">
      <label htmlFor="inputEndTime">Hora de Término</label>
      <input
        {...input}
        type="time"
        className="form-control"
        id="inputEndTime"
      />
      {this.renderError(meta)}
    </div>
  );

  onSubmit = formProps => {
    if (!this.isAvailable(formProps)) {
      console.log("not Available!");
      return;
    }
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

const validate = formValues => {
  const errors = {};

  const toNumber = time => {
    const temp = time.split(":");
    return parseFloat(parseInt(temp[0]) + parseInt(temp[1]) / 60);
  };

  if (formValues.description == null || !formValues.description.trim()) {
    errors.description = "Você deve inserir uma descrição";
  }

  if (formValues.date == null || !formValues.date.trim()) {
    errors.date = "Você deve inserir uma data";
  }

  if (formValues.startTime == null || !formValues.startTime.trim()) {
    errors.startTime = "Você deve inserir uma hora inicial";
  }

  if (formValues.startTime != undefined && formValues.endTime != undefined) {
    if (toNumber(formValues.startTime) >= toNumber(formValues.endTime)) {
      errors.startTime = "Hora inicial deve ser menor que a final";
    }
  }

  if (formValues.endTime == null || !formValues.endTime.trim()) {
    errors.endTime = "Você deve inserir uma hora final";
  }

  return errors;
};

const mapStateToProps = state => ({
  events: Object.values(state.events)
});

export default reduxForm({
  form: "eventForm",
  validate
})(connect(mapStateToProps)(EventForm));
