import {combineReducers} from 'redux'

import { userReducer } from './userReduser'
import { advertsReducer} from './advertsReducer'

export const rootReducer = combineReducers({
  userRed:userReducer,
  advertRed:advertsReducer,
})
