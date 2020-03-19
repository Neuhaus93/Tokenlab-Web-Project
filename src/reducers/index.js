import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import eventsReducer from "./eventsReducer";
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";

const visibilityFilter = (state = "", action) => {
  return state;
};

export default combineReducers({
  form: formReducer,
  events: eventsReducer,
  auth: authReducer,
  users: usersReducer,
  visibilityFilter
});
