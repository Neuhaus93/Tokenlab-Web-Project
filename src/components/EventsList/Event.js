import React from "react";

class Event extends React.Component {
  eventDescription = () => (
    <div className="col-7">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i class="far fa-calendar-alt"></i>
          </span>
        </div>
        <input type="text" className="form-control" readOnly />
      </div>
    </div>
  );

  eventDate = () => (
    <div className="col">
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
    <div className="col">
      <input type="time" className="form-control" id="startTime" readOnly />
    </div>
  );

  eventTimeEnd = () => (
    <div className="col">
      <input type="time" className="form-control" id="endTime" readOnly />
    </div>
  );

  render() {
    return (
      <div className="form-row align-items-center mb-1">
        {this.eventDescription()}
        {this.eventDate()}
        {this.eventTimeStart()}
        {this.eventTimeEnd()}
      </div>
    );
  }
}

export default Event;
