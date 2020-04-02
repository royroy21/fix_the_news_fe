import { combineReducers } from 'redux'

import appDimensionsReducer from './appDimensions'
import registerReducer from './register'
import tokenReducer from './token'
import topicsReducer from './topics'
import userReducer from './user';

export default combineReducers({
  appDimensions: appDimensionsReducer,
  register: registerReducer,
  token: tokenReducer,
  topics: topicsReducer,
  user: userReducer,
})
