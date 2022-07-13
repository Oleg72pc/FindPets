import { REG_USER, LOG_USER, LOGOUT_USER, SESSION_USER, LOG_USER_ERROR } from "../actionTypes/userAT"

export const addUserAC = (payload) => {
  return {
    type: REG_USER,
    payload
  }
}

export const logUserAC = (payload) => {
  return {
    type: LOG_USER,
    payload,
  };
};

export const logoutUserAC = (payload) => {
  return {
    type: LOGOUT_USER,
    payload,
  };
};

export const sessionUserAC = (payload) => {
  return {
    type: SESSION_USER,
    payload,
  };
};

export const logUserErrorAC = (payload) => {
  return {
    type: LOG_USER_ERROR,
    payload,
  };
};
