import { combineReducers } from 'redux'

import appDimensionsReducer from './appDimensions'
import registerReducer from './register'
import tokenReducer from './token'
import userReducer from './user';

export default combineReducers({
  appDimensions: appDimensionsReducer,
  register: registerReducer,
  token: tokenReducer,
  user: userReducer,
})
