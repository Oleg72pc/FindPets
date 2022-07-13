import {LOG_USER, LOGOUT_USER, REG_USER, SESSION_USER, LOG_USER_ERROR, REG_USER_ERROR} from "../actionTypes/userAT";

const initialState = { user: null };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_USER:
      return { ...state, user: action.payload, statusLOG: true };
    case LOG_USER_ERROR:
      return { ...state, errorLOG: action.payload, statusLOG: false };
    case REG_USER:
      return { ...state, user: action.payload, statusREG: true };
    case REG_USER_ERROR:
      return { ...state, errorREG: action.payload, statusREG: false };
    case LOGOUT_USER:
      return { ...state, user: null, error: null, statusLOG: false, statusREG: false };
    case SESSION_USER:
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
};
