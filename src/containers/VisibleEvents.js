import { connect } from "react-redux";

import EventList from "../components/eventlist/EventList";
import { deleteEvent } from "../actions";

const getVisibleEvents = (events, userId) => {
  return events.filter(e => userId === e.userId);
};

const mapStateToProps = state => ({
  events: getVisibleEvents(Object.values(state.events), state.auth.userId)
});

const mapDispatchToProps = dispatch => ({
  deleteEvent: id => dispatch(deleteEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
