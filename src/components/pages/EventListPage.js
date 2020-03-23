import React from "react";
import { connect } from "react-redux";

import { fetchEvents } from "../../actions";
import VisibleEvents from "../../containers/VisibleEvents";

class EventListPage extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    if (!this.props.isSignedIn) this.props.history.push("/");
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <VisibleEvents />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
});

export default connect(mapStateToProps, { fetchEvents })(EventListPage);
