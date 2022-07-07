import { LOGOUT_USER  } from '../actionTypes/userAT';

export const logUserAC = (payload) => {
  return {
    type: LOGOUT_USER,
    payload,
  };
};
