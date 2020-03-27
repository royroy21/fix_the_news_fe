import { combineReducers } from 'redux'

import registerReducer from './register'
import tokenReducer from './token'
import userReducer from './user';

export default combineReducers({
  register: registerReducer,
  token: tokenReducer,
  user: userReducer,
})
