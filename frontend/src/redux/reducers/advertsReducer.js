import { INIT_ADVERTS, ADD_ADVERT } from '../actionTypes/advertsAT';

const initialState = { adverts: [] };

export const advertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_ADVERTS:
      return { ...state, adverts: action.payload };
    case ADD_ADVERT:
      return { ...state, advert: [...state.adverts, action.payload] };
    default:
      return state;
  }
};
