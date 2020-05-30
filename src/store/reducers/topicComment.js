import {
  POST_TOPIC_COMMENT_BEGIN,
  POST_TOPIC_COMMENT_SUCCESS,
  POST_TOPIC_COMMENT_ERROR,
  CLEAR_TOPIC_COMMENT,
} from './../actions/topicComment';

const initialState = {
  object: null,
  loading: false,
  error: null,
};

const topicCommentReducer = (state = initialState, action) => {
  switch(action.type) {
    case POST_TOPIC_COMMENT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_TOPIC_COMMENT_SUCCESS:
        return {
        ...state,
        loading: false,
        object: action.payload.data,
      };
    case POST_TOPIC_COMMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        object: null,
      };
    case CLEAR_TOPIC_COMMENT:
      return {
        object: null,
        loading: false,
        error: null,
      };
    default:
      return state
  }
};

export default topicCommentReducer;
