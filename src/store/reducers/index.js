import { combineReducers } from 'redux'

import aboutCommunicationReducer from './aboutCommunication'
import appDimensionsReducer from './appDimensions'
import categoryNewsItemsReducer from './categoryNewsItems'
import dailyCommunicationReducer from './dailyCommunication'
import likeReducer from './like'
import newsItemReducer from './newsItem'
import registerReducer from './register'
import commentReducer from './comment'
import commentCommentsReducer from './commentComments'
import registrationCommunicationReducer from './registrationCommunication'
import topicCommentsReducer from './topicComments'
import tokenReducer from './token'
import topicReducer from './topic'
import topicsReducer from './topics'
import userReducer from './user';
import welcomeCommunicationReducer from './welcomeCommunication';

export default combineReducers({
  aboutCommunication: aboutCommunicationReducer,
  appDimensions: appDimensionsReducer,
  categoryNewsItems: categoryNewsItemsReducer,
  dailyCommunication: dailyCommunicationReducer,
  like: likeReducer,
  newsItem: newsItemReducer,
  register: registerReducer,
  comment: commentReducer,
  commentComments: commentCommentsReducer,
  registrationCommunication: registrationCommunicationReducer,
  topicComments: topicCommentsReducer,
  token: tokenReducer,
  topic: topicReducer,
  topics: topicsReducer,
  user: userReducer,
  welcomeCommunication: welcomeCommunicationReducer,
})
