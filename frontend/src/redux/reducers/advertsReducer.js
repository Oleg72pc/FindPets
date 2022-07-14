import { INIT_ADVERTS, ADD_ADVERT, ADD_PHOTO, INIT_INFO, INIT_COMMENT, ADD_COMMENT, DELETE_COMMENT, DELETE_ADVERT, FILTER_ADVERTS, RESET_FILTER_ADVERTS } from '../actionTypes/advertsAT';

const initialState = {
  adverts: [],
  photo: '',
  info:{},
  comments: [],
  filterAdverts:[],
  stateFilter:{cityId:'',typeId:'',title:''},
};

export const advertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_ADVERTS:
      return { ...state, adverts: action.payload , filterAdverts: action.payload};
    case ADD_ADVERT:
      return { ...state, advert: [...state.adverts, action.payload], photo:'' };
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
      case FILTER_ADVERTS :
        const newStateFilter= { ...state.stateFilter,[action.payload.target.name]: action.payload.target.value}
        let newFilterObj = [...state.adverts]
        let newFilterAdverts=[]
       if(newStateFilter.cityId !== ''){
        newFilterAdverts = newFilterObj.filter(el => el.cityId === +newStateFilter.cityId)
        newFilterObj=newFilterAdverts
       }
       if(newStateFilter.typeId !== ''){
        newFilterAdverts = newFilterObj.filter(el => el.typeId === +newStateFilter.typeId)
        newFilterObj=newFilterAdverts
       }
       if(newStateFilter.title !== ''){
        newFilterAdverts = newFilterObj.filter(el => el.title === newStateFilter.title)
        newFilterObj=newFilterAdverts
       }
        return  {...state, filterAdverts:newFilterObj,stateFilter:newStateFilter}
        case RESET_FILTER_ADVERTS:
          return {...state,filterAdverts:[...state.adverts],stateFilter:{cityId:'',typeId:'',title:''} }

    default:
      return state;
  }
};
