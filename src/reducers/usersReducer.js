import _ from "lodash";
import { ActionTypes } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USERS:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    case ActionTypes.CREATE_USER:
      return { ...state, [action.payload.id]: action.payload };

    default:
      return state;
  }
};
