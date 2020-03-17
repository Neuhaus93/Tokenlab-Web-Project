import { ActionTypes } from "../actions";

const INITIAL_STATE = {
  isSignedIn: false,
  userName: null,
  userId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOG_IN:
      return {
        ...state,
        isSignedIn: true,
        userName: action.userName,
        userId: action.userId
      };

    case ActionTypes.LOG_OUT:
      return { ...state, isSignedIn: false, userName: null, userId: null };

    default:
      return state;
  }
};
