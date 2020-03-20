import React from "react";
import ReactTooltip from "react-tooltip";

import { Link } from "react-router-dom";
import Modal from "../Modal";

class Event extends React.Component {
  eventTag = () => {
    switch (this.props.category) {
      case "Trabalho":
        return "fas fa-briefcase";

      case "Lazer":
        return "far fa-grin-beam";

      case "Educação":
        return "fas fa-book";

      default:
        return "far fa-calendar-alt";
    }
  };

  eventDescription = () => (
    <div className="col-md-5">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" data-tip={this.props.category}>
            <ReactTooltip place="left" effect="solid" />
            <i className={`${this.eventTag()}`}></i>
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          value={this.props.description}
          readOnly
        />
      </div>
    </div>
  );

  eventDate = () => (
    <div className="mr-auto">
      <input
        type="date"
        className="form-control"
        id="eventDate"
        name="eventDate"
        value={this.props.date}
        readOnly
      />
    </div>
  );

  eventTimeStart = () => (
    <div className="mr-auto">
      <input
        type="time"
        className="form-control"
        id="startTime"
        value={this.props.startTime}
        readOnly
      />
    </div>
  );

  eventTimeEnd = () => (
    <div className="mr-auto">
      <input
        type="time"
        className="form-control"
        id="endTime"
        value={this.props.endTime}
        readOnly
      />
    </div>
  );

  eventEditAndDelete = () => {
    return (
      <div className="ml-auto">
        <div className="btn-group" role="group">
          <Link
            to={`/events/edit/${this.props.id}`}
            className="btn btn-secondary"
          >
            <i className="fas fa-edit mr-2"></i>
            Editar
          </Link>
          <button
            type="button"
            className="btn btn-dark"
            data-toggle="modal"
            data-target={`#modalCenter${this.props.id}`}
          >
            <i className="fas fa-trash-alt mr-2"></i>
            Deletar
          </button>

          <Modal eventId={this.props.id} />
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="d-flex flex-wrap mb-2">
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
