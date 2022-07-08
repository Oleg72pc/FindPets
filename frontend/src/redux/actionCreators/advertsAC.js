import { INIT_ADVERTS, ADD_ADVERT } from "../actionTypes/advertsAT"

export const initAdvetrsAC = (payload) => {
  return {
    type: INIT_ADVERTS,
    payload,
  };
};

export const addAdvertAC = (payload) => {
  return {
    type: ADD_ADVERT,
    payload,
  };
};
