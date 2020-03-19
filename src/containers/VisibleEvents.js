import { connect } from "react-redux";

import EventList from "../components/eventlist/EventList";
import { createEvent } from "../actions";

const getVisibleEvents = (events, userId) => {
  return events.filter(e => userId === e.userId);
};

const mapStateToProps = state => ({
  events: getVisibleEvents(Object.values(state.events), state.auth.userId)
});

export default connect(mapStateToProps)(EventList);
