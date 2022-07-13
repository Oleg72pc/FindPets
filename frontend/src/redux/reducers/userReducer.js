import {LOG_USER, LOGOUT_USER, REG_USER, SESSION_USER, LOG_USER_ERROR} from "../actionTypes/userAT";

const initialState = { user: null };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_USER:
      return { ...state, user: action.payload, status: true };
    case LOG_USER_ERROR:
      return { ...state, error: action.payload, status: false };
    case REG_USER:
      return { ...state, user: action.payload };
    case LOGOUT_USER:
      return { ...state, user: null };
      case SESSION_USER:
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
};
