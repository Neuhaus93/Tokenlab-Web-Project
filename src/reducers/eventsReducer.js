import _ from "lodash";

import { ActionTypes } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_EVENTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    case ActionTypes.FETCH_EVENT ||
      ActionTypes.CREATE_EVENT ||
      ActionTypes.EDIT_EVENT:
      return { ...state, [action.payload.id]: action.payload };

    case ActionTypes.DELETE_EVENT:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
