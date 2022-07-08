import { LOG_USER } from '../actionTypes/userAT';

export const logUserAC = (payload) => {
  return {
    type: LOG_USER,
    payload,
  };
};
