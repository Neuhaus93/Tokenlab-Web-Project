import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchEvents } from "../../actions";
import VisibleEvents from "../../containers/VisibleEvents";

class EventListPage extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <VisibleEvents />
      </div>
    );
  }
}

export default connect(null, { fetchEvents })(EventListPage);
