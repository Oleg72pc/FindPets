import {
  INIT_ADVERTS,
  ADD_ADVERT,
  ADD_PHOTO,
  INIT_INFO,
  INIT_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT,
  DELETE_ADVERT,
} from '../actionTypes/advertsAT';

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

export const addPhotoAC = (payload) => {
  return {
    type: ADD_PHOTO, 
    payload,
  }
}

export const initInfoAC = (payload) => {
  return {
    type: INIT_INFO,
    payload
  }
}

export const initCommetnAC = (payload) => {
  return {
    type: INIT_COMMENT,
    payload,
  };
};

export const addCommetnAC = (payload) => {
  return {
    type: ADD_COMMENT,
    payload,
  };
};

export const deleteCommetnAC = (payload) => {
  return {
    type: DELETE_COMMENT,
    payload,
  };
};

export const deleteAdvertAC = (payload) => {
  return {
    type: DELETE_ADVERT,
    payload,
  };
};
