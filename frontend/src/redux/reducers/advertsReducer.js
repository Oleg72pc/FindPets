import { INIT_ADVERTS, ADD_ADVERT, ADD_PHOTO, INIT_INFO, INIT_COMMENT, ADD_COMMENT, DELETE_COMMENT, DELETE_ADVERT } from '../actionTypes/advertsAT';

const initialState = {
  adverts: [],
  photo: '',
  info:{},
  comments: [] 
};

export const advertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_ADVERTS:
      return { ...state, adverts: action.payload };
    case ADD_ADVERT:
      return { ...state, advert: [...state.adverts, action.payload] };
    case ADD_PHOTO:
      return { ...state, photo: action.payload };
    case INIT_INFO:
      return { ...state, info: action.payload };
    case INIT_COMMENT:
      return { ...state, comments: action.payload };
    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter((el) => el.id !== action.payload),
      };
    case DELETE_ADVERT:
      return {
        ...state,
        comments: state.adverts.filter((el) => el.id !== action.payload),
      };

    default:
      return state;
  }
};
