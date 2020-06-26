import { combineReducers } from 'redux'

import appDimensionsReducer from './appDimensions'
import categoryNewsItemsReducer from './categoryNewsItems'
import likeReducer from './like'
import newsItemReducer from './newsItem'
import registerReducer from './register'
import commentReducer from './comment'
import commentCommentsReducer from './commentComments'
import topicCommentsReducer from './topicComments'
import tokenReducer from './token'
import topicReducer from './topic'
import topicsReducer from './topics'
import userReducer from './user';

export default combineReducers({
  appDimensions: appDimensionsReducer,
  categoryNewsItems: categoryNewsItemsReducer,
  like: likeReducer,
  newsItem: newsItemReducer,
  register: registerReducer,
  comment: commentReducer,
  commentComments: commentCommentsReducer,
  topicComments: topicCommentsReducer,
  token: tokenReducer,
  topic: topicReducer,
  topics: topicsReducer,
  user: userReducer,
})
