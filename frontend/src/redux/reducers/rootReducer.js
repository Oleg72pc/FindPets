import {combineReducers} from 'redux'
import { adventReducer } from './adventReducer'

import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
  userRed:userReducer,
  advent: adventReducer
})
