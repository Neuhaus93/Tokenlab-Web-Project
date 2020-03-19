import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchEvents } from "../../actions";
import VisibleEvents from "../../containers/VisibleEvents";

class EventListPage extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  // renderCreate() {
  //   return (
  //     <div style={{ textAlign: "right", marginTop: "12px" }}>
  //       <Link to="/events/new" className="btn btn-primary">
  //         Criar Evento
  //       </Link>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <VisibleEvents />
        {/* {this.renderCreate()} */}
      </div>
    );
  }
}

export default connect(null, { fetchEvents })(EventListPage);
