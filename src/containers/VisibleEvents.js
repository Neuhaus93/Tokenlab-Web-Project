import { connect } from "react-redux";

import EventList from "../components/eventlist/EventList";
import { deleteEvent } from "../actions";

const mapStateToProps = state => ({
  events: Object.values(state.events)
});

const mapDispatchToProps = dispatch => ({
  deleteEvent: id => dispatch(deleteEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
