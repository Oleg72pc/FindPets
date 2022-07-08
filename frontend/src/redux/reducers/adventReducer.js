import {INIT_INFO} from "../actionTypes/adventAT";

const initialState = {info:{}};

export const adventReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_INFO:
      return { ...state, info: action.payload };
   default: return state
  }
};
