import { LOG_USER } from '../actionTypes/userLogAT';

export const logUserAC = (payload) => {
  return {
    type: LOG_USER,
    payload,
  };
};
