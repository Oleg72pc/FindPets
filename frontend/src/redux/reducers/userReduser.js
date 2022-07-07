import {LOG_USER, LOGOUT_USER, REG_USER} from "../actionTypes/userAT";

const initialState = { user: null };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_USER:
      return { ...state, user: action.payload };
    case REG_USER:
      return { ...state, user: action.payload };
    case LOGOUT_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};
