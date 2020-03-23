import React from "react";
import _ from "lodash";
import { connect } from "react-redux";

import { fetchEvent, editEvent } from "../../actions";
import EventForm from "./EventForm";

class EventEdit extends React.Component {
  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.id);
  }

  onSubmit = async formProps => {
    await this.props.editEvent(this.props.match.params.id, formProps);
    this.props.history.push("/events/list");
  };

  render() {
    if (!this.props.isSignedIn) this.props.history.push("/");
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-6 text-center">Editar Evento</h1>
          <EventForm
            initialValues={_.pick(
              this.props.event,
              "description",
              "category",
              "date",
              "startTime",
              "endTime"
            )}
            buttonText="Editar"
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  event: state.events[ownProps.match.params.id],
  isSignedIn: state.auth.isSignedIn
});

export default connect(mapStateToProps, { fetchEvent, editEvent })(EventEdit);
