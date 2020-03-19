import React from "react";

class Event extends React.Component {
  eventDescription = () => (
    <div className="col-md-5">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="far fa-calendar-alt"></i>
          </span>
        </div>
        <input type="text" className="form-control" readOnly />
      </div>
    </div>
  );

  eventDate = () => (
    <div className="col-md-2">
      <input
        type="date"
        className="form-control"
        id="eventDate"
        name="eventDate"
        readOnly
      />
    </div>
  );

  eventTimeStart = () => (
    <div className="col-md-1">
      <input type="time" className="form-control" id="startTime" readOnly />
    </div>
  );

  eventTimeEnd = () => (
    <div className="col-md-1">
      <input type="time" className="form-control" id="endTime" readOnly />
    </div>
  );

  eventEditAndDelete = () => (
    <div className="ml-auto">
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-secondary">
          <i className="fas fa-edit mr-2"></i>
          Editar
        </button>
        <button type="button" className="btn btn-dark">
          <i className="fas fa-trash-alt mr-2"></i>
          Deletar
        </button>
      </div>
    </div>
  );

  render() {
    return (
      <div className="form-row align-items-center mb-1">
        {this.eventDescription()}
        {this.eventDate()}
        {this.eventTimeStart()}
        {this.eventTimeEnd()}
        {this.eventEditAndDelete()}
      </div>
    );
  }
}

export default Event;
