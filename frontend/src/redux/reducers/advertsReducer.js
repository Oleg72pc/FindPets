import { INIT_ADVERTS, ADD_ADVERT, ADD_PHOTO, INIT_INFO } from '../actionTypes/advertsAT';

const initialState = { adverts: [], photo: '', info:{} };

export const advertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_ADVERTS:
      return { ...state, adverts: action.payload };
    case ADD_ADVERT:
      return { ...state, advert: [...state.adverts, action.payload] };
      case ADD_PHOTO:
      return {...state, photo: action.payload};
      case INIT_INFO:
        return { ...state, info: action.payload };
      
    default:
      return state;
  }
};
