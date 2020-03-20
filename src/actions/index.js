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

export const editEvent = (id, formValues) => async dispatch => {
  const response = await db.patch(`/events/${id}`, formValues);

  dispatch({ type: ActionTypes.EDIT_EVENT, payload: response.data });
};

export const deleteEvent = id => async dispatch => {
  await db.delete(`/events/${id}`);

  dispatch({ type: ActionTypes.DELETE_EVENT, payload: id });
};

export const fetchEvent = id => async dispatch => {
  const response = await db.get(`/events/${id}`);

  dispatch({ type: ActionTypes.FETCH_EVENT, payload: response.data });
};

export const fetchEvents = () => async dispatch => {
  const response = await db.get("/events");

  dispatch({ type: ActionTypes.FETCH_EVENTS, payload: response.data });
};

/*
 * Users
 */

export const createUser = formValues => async (dispatch, getState) => {
  const response = await db.post("/users", {
    ...formValues
  });

  dispatch({
    type: ActionTypes.CREATE_USER,
    payload: response.data
  });
};

export const fetchUsers = () => async dispatch => {
  const response = await db.get("/users");

  dispatch({ type: ActionTypes.FETCH_USERS, payload: response.data });
};

/*
 * Auth
 */

export const logIn = loginInfo => async (dispatch, getState) => {
  const users = Object.values(getState().users);
  const validUser = users.filter(
    user =>
      user.email === loginInfo.loginEmail &&
      user.password === loginInfo.loginPassword
  );
  const userName = validUser.length !== 0 ? validUser[0].userName : null;
  const userId = validUser.length !== 0 ? validUser[0].id : null;

  if (validUser.length !== 0) {
    dispatch({
      type: ActionTypes.LOG_IN,
      userName: userName,
      userId: userId
    });
    dispatch({
      type: ActionTypes.CLEAR_USERS
    });
    dispatch({
      type: ActionTypes.FETCH_EVENTS
    });
  }
};

export const logOut = () => ({
  type: ActionTypes.LOG_OUT
});

// ----------------------

export const userActions = {};

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
  CLEAR_USERS: "CLEAR_USERS",
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
