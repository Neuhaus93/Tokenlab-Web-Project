import React from "react";
import { connect } from "react-redux";

import { createEvent } from "../../actions";
import EventForm from "./EventForm";

class EventCreate extends React.Component {
  onSubmit = async formProps => {
    await this.props.createEvent(formProps);
    this.props.history.push("/events/list");
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-6 text-center">Criar Evento</h1>
          <EventForm onSubmit={this.onSubmit} buttonText="Criar" />
        </div>
      </div>
    );
  }
}

export default connect(null, { createEvent })(EventCreate);
