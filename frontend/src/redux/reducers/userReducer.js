import {
  LOG_USER,
  LOGOUT_USER,
  REG_USER, 
  SESSION_USER, 
  LOG_USER_ERROR, 
  REG_USER_ERROR, 
  REGFORM_USER, 
  REGFORM_USER_ERROR,
  REGFORM_USER_ERROR_STATUS_FALSE} from "../actionTypes/userAT";

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
      return { ...state, user: null, error: null, errorREG: null, errorREGFORM: null, statusLOG: false, statusREG: false, statusREGFORM: false };
    case SESSION_USER:
      return { ...state, user: action.payload.user };
    case REGFORM_USER:
      return { ...state, user: action.payload, statusREGFORM: true };
    case REGFORM_USER_ERROR:
      return { ...state, errorREGFORM: action.payload, statusREGFORM: false };
    case REGFORM_USER_ERROR_STATUS_FALSE:
     return { ...state, statusREGFORM: false };
    default:
      return state;
  }
};
