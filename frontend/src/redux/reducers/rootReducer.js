import {combineReducers} from 'redux'

import { userReducer } from './userReduser'

export const rootReducer = combineReducers({
  userRed:userReducer
})
