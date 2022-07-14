import { 
  REG_USER, 
  LOG_USER, 
  LOGOUT_USER, 
  SESSION_USER, 
  LOG_USER_ERROR, 
  REG_USER_ERROR, 
  REGFORM_USER, 
  REGFORM_USER_ERROR, 
  REGFORM_USER_ERROR_STATUS_FALSE} from "../actionTypes/userAT"

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

export const addUserErrorAC = (payload) => {
  return {
    type: REG_USER_ERROR,
    payload,
  };
};

export const addFormUserAC = (payload) => {
  return {
    type: REGFORM_USER,
    payload
  }
}

export const addFormUserErrorAC = (payload) => {
  return {
    type: REGFORM_USER_ERROR,
    payload,
  };
};

export const addFormUserErrorFalseAC = (payload) => {
  return {
    type: REGFORM_USER_ERROR_STATUS_FALSE,
    payload,
  };
};
