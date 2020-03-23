import React from "react";
import { connect } from "react-redux";

import { createEvent } from "../../actions";
import EventForm from "./EventForm";

class EventCreate extends React.Component {
  toNumber = time => {
    const temp = time.split(":");
    return parseFloat(parseInt(temp[0]) + parseInt(temp[1]) / 60);
  };

  isValidDate = formProps => {
    const { date, startTime, endTime } = formProps;

    if (this.toNumber(startTime) >= this.toNumber(endTime)) {
      return false;
    }

    let validDate = true;

    for (let i = 0; i < this.props.events.length; i++) {
      const e = this.props.events[i];
      if (date === e.date) {
        if (
          this.toNumber(startTime) < this.toNumber(e.startTime) &&
          this.toNumber(endTime) > this.toNumber(e.startTime)
        ) {
          validDate = false;
          break;
        }

        if (
          this.toNumber(endTime) > this.toNumber(e.endTime) &&
          this.toNumber(startTime) < this.toNumber(e.endTime)
        ) {
          validDate = false;
          break;
        }

        if (
          this.toNumber(startTime) > this.toNumber(e.startTime) &&
          this.toNumber(endTime) < this.toNumber(e.endTime)
        ) {
          validDate = false;
          break;
        }
      }
    }

    return validDate;
  };

  onSubmit = async formProps => {
    if (!this.isValidDate(formProps)) return;
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

const mapStateToProps = state => ({
  events: Object.values(state.events)
});

export default connect(mapStateToProps, { createEvent })(EventCreate);
