import { combineReducers } from 'redux'

import appDimensionsReducer from './appDimensions'
import categoryNewsItemsReducer from './categoryNewsItems'
import newsItemReducer from './newsItem'
import registerReducer from './register'
import commentReducer from './comment'
import topicCommentsReducer from './topicComments'
import tokenReducer from './token'
import topicsReducer from './topics'
import userReducer from './user';

export default combineReducers({
  appDimensions: appDimensionsReducer,
  categoryNewsItems: categoryNewsItemsReducer,
  newsItem: newsItemReducer,
  register: registerReducer,
  comment: commentReducer,
  topicComments: topicCommentsReducer,
  token: tokenReducer,
  topics: topicsReducer,
  user: userReducer,
})
