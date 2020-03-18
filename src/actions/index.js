import db from "../apis/database";

/*
 * Events
 */

export const createEvent = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await db.post("/events", {
    userId,
    ...formValues
  });

  dispatch({
    type: ActionTypes.CREATE_EVENT,
    payload: response.data
  });
};

export const fetchEvents = () => async dispatch => {
  const response = await db.get("/events");

  dispatch({ type: ActionTypes.FETCH_EVENTS, payload: response.data });
};

/*
 * Auth
 */

export const logOut = () => ({
  type: ActionTypes.LOG_OUT
});

// ----------------------

export const ActionTypes = {
  /*
   * Events
   */
  CREATE_EVENT: "CREATE_EVENT",
  TOGGLE_EVENT: "TOGGLE_EVENT",
  FETCH_EVENTS: "FETCH_EVENTS",
  FETCH_EVENT: "FETCH_EVENT",
  EDIT_EVENT: "EDIT_EVENT",
  DELETE_EVENT: "DELETE_EVENT",
  /*
   * Users
   */
  CREATE_USER: "CREATE_USER",
  FETCH_USERS: "FETCH_USERS",
  /*
   * Auth
   */
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",
  /*
   * Visibility Filter
   */
  SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER"
};
