import React from "react";
import ReactTooltip from "react-tooltip";

class Event extends React.Component {
  eventTag = () => {
    switch (this.props.category) {
      case "trabalho":
        return "fas fa-briefcase";

      case "lazer":
        return "far fa-grin-beam";

      case "educação":
        return "fas fa-book";

      default:
        return "far fa-calendar-alt";
    }
  };

  eventDescription = () => (
    <div className="col-md-5">
      <div className="input-group">
        <div className="input-group-prepend">
          <span
            className="input-group-text"
            data-tip={this.props.category.replace(/^\w/, c => c.toUpperCase())}
          >
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
      // <div className="form-row align-items-center mb-1">
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
