import React from "react";
import { Link } from "react-router-dom";

import Events from "../EventsList/Event";

class EventList extends React.Component {
  renderCreate() {
    return (
      <div style={{ textAlign: "right", marginTop: "12px" }}>
        <Link to="/events/new" className="btn btn-primary">
          Create Event
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        Events Page
        <Events />
        {this.renderCreate()}
      </div>
    );
  }
}

export default EventList;
